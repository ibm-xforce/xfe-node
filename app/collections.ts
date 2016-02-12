///<reference path="../typings/request/request.d.ts" />
///<reference path="../typings/node-uuid/node-uuid.d.ts"/>
///<reference path="../typings/lodash/lodash.d.ts"/>

import {apiUrl} from "./config";

// External
import * as request from "request";
import * as uuid from "node-uuid";
import * as _ from "lodash";
import * as fs from "fs";

// Internal
import { Collection } from "./interfaces/collection";
import { CollectionCreation } from "./interfaces/collectionCreation";

export class Collections {
  request: any;

  constructor(username: string, password: string) {
    this.request = request.defaults({
      baseUrl: apiUrl,
      auth: {
        user: username,
        pass: password
      }
    });
  }


  create(collectionCreationObject?: CollectionCreation) {
    return new Promise((resolve, reject) => {
      let collection = <CollectionCreation>{};
      if (collectionCreationObject !== null) {
        _.merge(collection, collectionCreationObject);
      }
      if (collection.contents) {
        collection.contents = {wiki: collection.contents, reports: []};
      }
      _.defaults(collection, {
        title: uuid.v4(),
        contents: {wiki: "", reports: []}
      });
      this.request({
        method: "POST",
        uri: "/casefiles",
        json: true,
        body: collection
      }, (error, response, body) => {
        if (error || body.response) {
          reject(error);
        }
        let collectionID = body.caseFileID;

        if (collection.filePath) {
          let formData = {
            "stix": fs.createReadStream(collection.filePath)
          };
          this.request({
            method: "POST",
            uri: "/casefiles/" + collectionID + "/importpreview",
            formData: formData,
            json: true
          }, (error, response, body) => {
            if (error) {
              reject(error);
            }
            if (body && body.candidates && body.candidates.length > 0) {
              let postBody = {
                "reportkeys": body.candidates
              };
              this.request({
                method: "POST",
                uri: "/casefiles/" + collectionID + "/createreports",
                json: true,
                body: postBody
              }, (error) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(collectionID);
                }
              });
            } else {
              resolve(collectionID);
            }
          });

        } else {
          resolve(collectionID);
        }
      });
    });
  }

  delete(collectionID: string) {
    return new Promise((resolve, reject) => {
      this.request({
        method: "DELETE",
        uri: "/casefiles/" + collectionID,
        json: true,
      }, (error, response, body) => {
        (error ? reject(error) : resolve(body));
      });
    });
  }
}


