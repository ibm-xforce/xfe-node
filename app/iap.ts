import {apiUrl} from "./config";
import * as request from "request";

export class IAP {
  request: any;

  /**
   * Creates an IAP object
   * @param {string} username - XFE API Username
   * @param {string} password - XFE API Password
   */
  constructor(username: string, password: string) {
    this.request = request.defaults({
      baseUrl: apiUrl,
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
  get(appName: string) {
    return new Promise((resolve, reject) => {
      this.request({
        uri: `/app/${appName}`
      }, function (error, response, body) {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
  }
}
