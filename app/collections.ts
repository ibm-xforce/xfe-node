import {apiUrl, webUrl} from "./config";

// External
import * as request from "request";
import * as uuid from "node-uuid";
import * as _ from "lodash";
import * as fs from "fs";

// Internal
import { ICollection } from "./interfaces/collection";
import { CollectionCreation } from "./interfaces/collectionCreation";
import {CollectionRetreival} from "./interfaces/collection";
import {Shared} from "./interfaces/collection";
import {CollectionShare} from "./interfaces/collection";

export class Collection {
  request: any;
  collectionID: string;
  link: string;
  acl: any;
  constructor(request: any, CollectionID: string) {
    this.collectionID = CollectionID;
    this.link = webUrl + `collection/${this.collectionID}`;
    this.request = request;
  }

  shareWith(toShareWith: CollectionShare) {
    return new Promise((resolve, reject) => {
      if (toShareWith.email) {
        this.request({
          uri: `/casefiles/${this.collectionID}/acl`,
          json: true,
        }, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            this.acl = body.acl;
            this.acl.shared = true;
            this.request({
              method: "GET",
              uri: `/user/${toShareWith.email}`,
              json: true
            }, (error, response, body) => {
              if (error) {
                reject(error);
              } else {
                let user = body.user;
                if (toShareWith.level) {
                  user.level = toShareWith.level.toString().toLowerCase();
                } else {
                  user.level = "contribute";
                }
                this.acl.shareDetails.users.push(user);
                this.request({
                  method: "PUT",
                  uri: `/casefiles/${this.collectionID}/acl`,
                  json: true,
                  body: {acl: this.acl}
                }, (error) => {
                  if (error) {
                    reject(error);
                  } else {
                    resolve();
                  }
                });
              }
            });
          }
        });
      } else {
        reject();
      }
    });
  }
}

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
                  resolve(new Collection(this.request, collectionID));
                }
              });
            } else {
              resolve(new Collection(this.request, collectionID));
            }
          });

        } else {
          resolve(new Collection(this.request, collectionID));
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

  get(collectionOptions?: CollectionRetreival) {
    return new Promise((resolve, reject) => {
      let uri = "";
      if (collectionOptions && collectionOptions.collectionID) {
        uri = "/casefiles/" + collectionOptions.collectionID;
      } else if (collectionOptions && collectionOptions.type) {
        if (collectionOptions.type === Shared.Mine) {
          uri = "/casefiles";
        } else {
          uri = "/casefiles/" + collectionOptions.type.toString().toLowerCase();
        }
      } else {
        uri = "/casefiles";
      }
      this.request({
        uri: uri
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


