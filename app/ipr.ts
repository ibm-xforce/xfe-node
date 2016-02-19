import {apiUrl} from "./config";
import * as request from "request";

export class IPR {
  request: any;

  /**
   * Creates an IPR object
   * @param {string} username - XFE API Username
   * @param {string} password - XFE API Password
     */
  constructor(username: string, password: string) {
    this.request = request.defaults({
      baseUrl:  apiUrl,
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
  get(ipAddress: string) {
    return new Promise((resolve, reject) => {
      this.request({
        uri: "/ipr/" + ipAddress
      }, function(error, response, body) {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
  }
}

