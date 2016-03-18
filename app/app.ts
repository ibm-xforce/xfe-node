import { IAP } from "./iap";
import { IPR } from "./ipr";
import { URL } from "./url";
import { Collections } from "./collections";
import { Files } from "./files";
import "babel-polyfill";

/**
 * The default class for the X-Force Exchange.
 */
export default class XFE {
  ipr: IPR;
  url: URL;
  iap: IAP;
  collections: Collections;
  files: Files;

  /**
   * Creates an XFE API Binding
   * @param {string} username - XFE API Username
   * @param {string} password - XFE API Password
     */
  constructor(username: string, password: string) {

    this.ipr = new IPR(username, password);
    this.url = new URL(username, password);
    this.iap = new IAP(username, password);
    this.collections = new Collections(username, password);
    this.files = new Files(username, password);
  }

}
module.exports = XFE;
