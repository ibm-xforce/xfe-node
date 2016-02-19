import {apiUrl} from "./config";
import * as request from "request";
import * as fs from "fs";

export class Files {
  request: any;

  /**
   * Creates an File Analysis object
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

  getIntel(filePath: string) {
    return new Promise((resolve, reject) => {
      if (filePath) {
        let formData = {
          "file": fs.createReadStream(filePath)
        };
        this.request({
          method: "POST",
          uri: "/files",
          formData: formData,
          json: true
        }, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            resolve(body);
          }
        });
      }
    });
  }
}
