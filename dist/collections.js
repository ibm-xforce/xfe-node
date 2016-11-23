"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config_1 = require("./config");
// External
var request = require("request");
var uuid = require("uuid");
var _ = require("lodash");
var fs = require("fs");
var collection_1 = require("./interfaces/collection");

var Collection = function () {
    function Collection(request, CollectionID) {
        _classCallCheck(this, Collection);

        this.collectionID = CollectionID;
        this.link = config_1.webUrl + ("collection/" + this.collectionID);
        this.request = request;
    }

    _createClass(Collection, [{
        key: "shareWith",
        value: function shareWith(toShareWith) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (toShareWith.email) {
                    _this.request({
                        uri: "/casefiles/" + _this.collectionID + "/acl",
                        json: true
                    }, function (error, response, body) {
                        if (error) {
                            reject(error);
                        } else {
                            _this.acl = body.acl;
                            _this.acl.shared = true;
                            _this.request({
                                method: "GET",
                                uri: "/user/" + toShareWith.email,
                                json: true
                            }, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                } else {
                                    var user = body.user;
                                    if (toShareWith.level) {
                                        user.level = toShareWith.level.toString().toLowerCase();
                                    } else {
                                        user.level = "contribute";
                                    }
                                    _this.acl.shareDetails.users.push(user);
                                    _this.request({
                                        method: "PUT",
                                        uri: "/casefiles/" + _this.collectionID + "/acl",
                                        json: true,
                                        body: { acl: _this.acl }
                                    }, function (error) {
                                        if (error) {
                                            reject(error);
                                        } else {
                                            resolve();
                                        }
                                    });
                                }
                            });
                        }
                    });
                } else {
                    reject();
                }
            });
        }
    }]);

    return Collection;
}();

var Collections = function () {
    function Collections(username, password) {
        _classCallCheck(this, Collections);

        this.request = request.defaults({
            baseUrl: config_1.apiUrl,
            auth: {
                user: username,
                pass: password
            }
        });
    }

    _createClass(Collections, [{
        key: "create",
        value: function create(collectionCreationObject) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                var collection = {};
                if (collectionCreationObject !== null) {
                    _.merge(collection, collectionCreationObject);
                }
                if (collection.contents) {
                    collection.contents = { wiki: collection.contents, reports: [] };
                }
                _.defaults(collection, {
                    title: uuid.v4(),
                    contents: { wiki: "", reports: [] }
                });
                _this2.request({
                    method: "POST",
                    uri: "/casefiles",
                    json: true,
                    body: collection
                }, function (error, response, body) {
                    if (error || body.response) {
                        reject(error);
                    }
                    var collectionID = body.caseFileID;
                    if (collection.filePath) {
                        var formData = {
                            "stix": fs.createReadStream(collection.filePath)
                        };
                        _this2.request({
                            method: "POST",
                            uri: "/casefiles/" + collectionID + "/importpreview",
                            formData: formData,
                            json: true
                        }, function (error, response, body) {
                            if (error) {
                                reject(error);
                            }
                            if (body && body.candidates && body.candidates.length > 0) {
                                var postBody = {
                                    "reportkeys": body.candidates
                                };
                                _this2.request({
                                    method: "POST",
                                    uri: "/casefiles/" + collectionID + "/createreports",
                                    json: true,
                                    body: postBody
                                }, function (error) {
                                    if (error) {
                                        reject(error);
                                    } else {
                                        resolve(new Collection(_this2.request, collectionID));
                                    }
                                });
                            } else {
                                resolve(new Collection(_this2.request, collectionID));
                            }
                        });
                    } else {
                        resolve(new Collection(_this2.request, collectionID));
                    }
                });
            });
        }
    }, {
        key: "delete",
        value: function _delete(collectionID) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _this3.request({
                    method: "DELETE",
                    uri: "/casefiles/" + collectionID,
                    json: true
                }, function (error, response, body) {
                    error ? reject(error) : resolve(body);
                });
            });
        }
    }, {
        key: "get",
        value: function get(collectionOptions) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                var uri = "";
                if (collectionOptions && collectionOptions.collectionID) {
                    uri = "/casefiles/" + collectionOptions.collectionID;
                } else if (collectionOptions && collectionOptions.type) {
                    if (collectionOptions.type === collection_1.Shared.Mine) {
                        uri = "/casefiles";
                    } else {
                        uri = "/casefiles/" + collectionOptions.type.toString().toLowerCase();
                    }
                } else {
                    uri = "/casefiles";
                }
                _this4.request({
                    uri: uri
                }, function (error, response, body) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(body);
                    }
                });
            });
        }
    }]);

    return Collections;
}();

exports.Collections = Collections;