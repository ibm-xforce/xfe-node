"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

///<reference path="../typings/request/request.d.ts" />
///<reference path="../typings/node-uuid/node-uuid.d.ts"/>
///<reference path="../typings/lodash/lodash.d.ts"/>
var config = require("./config");
var request = require("request");
var uuid = require("node-uuid");
var _ = require("lodash");

var Collections = function () {
    function Collections(username, password) {
        _classCallCheck(this, Collections);

        this.request = request.defaults({
            baseUrl: config.apiUrl,
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
                    _.merge(collectionCreationObject, collection);
                }
                _.defaults(collection, {
                    title: uuid.v4(),
                    contents: ""
                });
                var options = {
                    method: "POST",
                    uri: "/casefiles",
                    json: true,
                    body: collection,
                    foo: "bar"
                };
                _this.request(options, function (error, response, body) {
                    console.log(body);
                });
            });
        }
    }]);

    return Collections;
}();

exports.Collections = Collections;