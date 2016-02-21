import {apiUrl} from "./config";
import * as request from "request";

export class URL {
  request: any;

  /**
   * Creates an URL object
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
   * Get URL Threat Intelligence
   * @param {string} url - URL to search for
   * @returns {Promise<T>} Returns a promise with the response
     */
  get(url: string) {
    return new Promise((resolve, reject) => {
      this.request({
        uri: `/url/${url}`
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

