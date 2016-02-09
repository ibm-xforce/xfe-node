"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ipr_1 = require("./ipr");
var url_1 = require("./url");
var collection_1 = require("./collection");
require("babel-polyfill");

var XFE = function XFE(username, password) {
    _classCallCheck(this, XFE);

    this.ipr = new ipr_1.IPR(username, password);
    this.url = new url_1.URL(username, password);
    this.collection = new collection_1.Collection(username, password);
};

exports.XFE = XFE;
module.exports = XFE;
//
//
//var xfe = require("xfe")("user", "password");
//
//
//var email = fs.readFileSync("./email.eml", 'utf-8');
//
//email = {
//  buffer: "plaintext utf-8 encoded",
//  ...
//};
//
//var collection = {
//  title: "Test Collection 1",
//  file: email,
//  wiki: "Hey CISO, here is a description"
//};
//
//xfe.createCollection(collection).then(function(collection) {
//  console.log(collection.url); //=> to give to interested parties
//});