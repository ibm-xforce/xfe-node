///<reference path="../typings/request/request.d.ts" />
import * as config from "./config";
import request = require("request");

export class IPR {
  request: any;
  constructor(username: string, password: string) {
    this.request = request.defaults({
      baseUrl:  config.apiUrl,
      auth: {
        user: username,
        pass: password
      }
    });
  }

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

