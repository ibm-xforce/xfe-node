///<reference path="../typings/request/request.d.ts" />
import * as config from "./config";
import request = require("request");

enum Shared {
  off,
  shared,
  public
}

interface ICollection {
  created: Date;
  owner: {
    name: string
  };
  title: string;
  contents: {
    wiki: string;
    reports: Array<any>
  };
  caseFileID: string;
  writeable: boolean;
  deletable: boolean;
  nPeople: number;
  shared: Shared;
  mine: boolean;
}

export class Collection {
  request: any;

  constructor(username: string, password: string) {
    this.request = request.defaults({
      baseUrl: config.apiUrl,
      auth: {
        user: username,
        pass: password
      }
    });
  }
}


