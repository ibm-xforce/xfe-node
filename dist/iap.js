"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

///<reference path="../typings/request/request.d.ts" />
var config = require("./config");
var request = require("request");

var IAP = function () {
    /**
     * Creates an IAP object
     * @param {string} username - XFE API Username
     * @param {string} password - XFE API Password
     */

    function IAP(username, password) {
        _classCallCheck(this, IAP);

        this.request = request.defaults({
            baseUrl: config.apiUrl,
            auth: {
                user: username,
                pass: password
            }
        });
    }
    /**
     * Get IAP Address Threat Intelligence
     * @param {string} appName - App Name (like facebook) to get threat intelligence for
     * @returns {Promise<T>}
     * @example
     * // Returns intelligence about a web app
     * var iapInstance = new IAP("username", "password");
     * IAP.get("facebook").then(function(response) {
     *   console.log(response)
     * });
     */


    _createClass(IAP, [{
        key: "get",
        value: function get(appName) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.request({
                    uri: "/app/" + appName
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

    return IAP;
}();

exports.IAP = IAP;