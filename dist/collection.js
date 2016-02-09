"use strict";
///<reference path="../typings/request/request.d.ts" />

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = require("./config");
var request = require("request");
var Shared;
(function (Shared) {
    Shared[Shared["off"] = 0] = "off";
    Shared[Shared["shared"] = 1] = "shared";
    Shared[Shared["public"] = 2] = "public";
})(Shared || (Shared = {}));

var Collection = function Collection(username, password) {
    _classCallCheck(this, Collection);

    this.request = request.defaults({
        baseUrl: config.apiUrl,
        auth: {
            user: username,
            pass: password
        }
    });
};

exports.Collection = Collection;