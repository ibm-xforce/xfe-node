"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config_1 = require("./config");
var request = require("request");
var fs = require("fs");

var Files = function () {
    /**
     * Creates an File Analysis object
     * @param {string} username - XFE API Username
     * @param {string} password - XFE API Password
     */

    function Files(username, password) {
        _classCallCheck(this, Files);

        this.request = request.defaults({
            baseUrl: config_1.apiUrl,
            auth: {
                user: username,
                pass: password
            }
        });
    }
    /**
     * Gets report indicators from a local file
     * @param filePath - Path on your local machine to the file you want to upload
     * @returns {Promise<T>}
     * @example
     *
     * ```javascript
     *
     * xfeClient.files.getIntel("./email.eml").then(function(result) {
     *   console.log(result);
     * });
     * ```
     */


    _createClass(Files, [{
        key: "getIntel",
        value: function getIntel(filePath) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (filePath) {
                    var formData = {
                        "file": fs.createReadStream(filePath)
                    };
                    _this.request({
                        method: "POST",
                        uri: "/files",
                        formData: formData,
                        json: true
                    }, function (error, response, body) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(body);
                        }
                    });
                }
            });
        }
    }]);

    return Files;
}();

exports.Files = Files;