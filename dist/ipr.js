"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

///<reference path="../typings/request/request.d.ts" />
var config = require("./config");
var request = require("request");

var IPR = function () {
    /**
     * Creates an IPR object
     * @param {string} username - XFE API Username
     * @param {string} password - XFE API Password
       */

    function IPR(username, password) {
        _classCallCheck(this, IPR);

        this.request = request.defaults({
            baseUrl: config.apiUrl,
            auth: {
                user: username,
                pass: password
            }
        });
    }
    /**
     * Get IP Address Threat Intelligence
     * @param {string} ipAddress - IPv4/IPv6 Address to get threat intelligence for
     * @returns {Promise<T>}
       */


    _createClass(IPR, [{
        key: "get",
        value: function get(ipAddress) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.request({
                    uri: "/ipr/" + ipAddress
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

    return IPR;
}();

exports.IPR = IPR;