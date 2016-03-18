"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var iap_1 = require("./iap");
var ipr_1 = require("./ipr");
var url_1 = require("./url");
var collections_1 = require("./collections");
var files_1 = require("./files");
require("babel-polyfill");

var XFE =
/**
 * Creates an XFE API Binding
 * @param {string} username - XFE API Username
 * @param {string} password - XFE API Password
   */
function XFE(username, password) {
    _classCallCheck(this, XFE);

    this.ipr = new ipr_1.IPR(username, password);
    this.url = new url_1.URL(username, password);
    this.iap = new iap_1.IAP(username, password);
    this.collections = new collections_1.Collections(username, password);
    this.files = new files_1.Files(username, password);
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = XFE;
module.exports = XFE;