"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

///<reference path="../typings/request/request.d.ts" />
///<reference path="../typings/node-uuid/node-uuid.d.ts"/>
///<reference path="../typings/lodash/lodash.d.ts"/>
var config_1 = require("./config");
// External
var request = require("request");
var uuid = require("node-uuid");
var _ = require("lodash");
var fs = require("fs");

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
            var _this = this;

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
                _this.request({
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
                        _this.request({
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
                                _this.request({
                                    method: "POST",
                                    uri: "/casefiles/" + collectionID + "/createreports",
                                    json: true,
                                    body: postBody
                                }, function (error) {
                                    if (error) {
                                        reject(error);
                                    } else {
                                        resolve(collectionID);
                                    }
                                });
                            } else {
                                resolve(collectionID);
                            }
                        });
                    } else {
                        resolve(collectionID);
                    }
                });
            });
        }
    }, {
        key: "delete",
        value: function _delete(collectionID) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.request({
                    method: "DELETE",
                    uri: "/casefiles/" + collectionID,
                    json: true
                }, function (error, response, body) {
                    error ? reject(error) : resolve(body);
                });
            });
        }
    }]);

    return Collections;
}();

exports.Collections = Collections;