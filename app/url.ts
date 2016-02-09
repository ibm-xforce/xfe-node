///<reference path="../typings/request/request.d.ts" />
import * as config from "./config";
import request = require("request");

export class URL {
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

  get(url: string) {
    return new Promise(function(resolve, reject) {
      this.request({
        uri: "/ipr/" + url
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

