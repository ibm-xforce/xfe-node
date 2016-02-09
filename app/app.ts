import { IPR } from "./ipr";
import { URL } from "./url";
import { Collection } from "./collection";
import "babel-polyfill";

export default class XFE {
  ipr: IPR;
  url: URL;
  collection: Collection;

  constructor(username: string, password: string) {

    this.ipr = new IPR(username, password);
    this.url = new URL(username, password);
    this.collection = new Collection(username, password);
  }

}
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
