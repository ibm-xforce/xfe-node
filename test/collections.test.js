'use strict';
var chai = require('chai');
var nock = require('nock');
var config = require("./config");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
describe('xfe.collections', function() {

  var xfe;
  var xfeClient;
  beforeEach(function() {
    xfe = require('../dist/app.js');
    xfeClient = new xfe(config.username, config.password);
  });

  it('exists', function() {
    expect(xfeClient.collections).to.exist;
  });

  it('creates a collection given a file', function() {
    this.timeout(5000);
    var apiResponse = {"caseFileID": "eb3336fc49e63c596aec9b5096d650eb"};
    var candidateResponse =
    {
      "candidates": [{"type": "URL", "value": "1.2.3.4"}, {"type": "URL", "value": "google.com"}],
      "fileindicator": "OTHER"
    };
    var requests = nock('https://api.xforce.ibmcloud.com')
      .post('/casefiles')
      .reply(200, apiResponse);
    nock('https://api.xforce.ibmcloud.com')
      .post('/casefiles/eb3336fc49e63c596aec9b5096d650eb/importpreview')
      .reply(200, candidateResponse);
    nock('https://api.xforce.ibmcloud.com')
      .post('/casefiles/eb3336fc49e63c596aec9b5096d650eb/createreports')
      .reply(200);
    expect(xfeClient.collections.create({filePath: "./test/fixtures/importtest.txt"})).to.be.fulfilled;
  });

  it('deletes a collection', function() {
    var requests = nock('https://api.xforce.ibmcloud.com')
      .delete('/casefiles/eb3336fc49e63c596aec9b5096d650eb')
      .reply(200, {
        message: "Successfully deleted eb3336fc49e63c596aec9b5096d650eb"
      });
    expect(xfeClient.collections.delete("eb3336fc49e63c596aec9b5096d650eb")).to.be.fulfilled;
  });

  it('retrieves a collection given a collection ID', function() {
    nock('https://api.xforce.ibmcloud.com')
      .get('/casefiles/eb3336fc49e63c596aec9b5096d650eb')
      .reply(200, {
        "created": "2016-02-18T23:50:23.686Z",
        "owner": {
          "name": "Cameron Will",
          "uuid": "http://www.ibm.com/270007803C",
          "verified": "ibmexpert",
          "connectionsId": 200371532
        },
        "title": "TrojanDownloader:Win32/Upatre.CQ",
        "contents": {
          "wiki": "Wiin Information",
          "reports": []
        },
        "caseFileID": "eb3336fc49e63c596aec9b5096d650eb",
        "links": [],
        "writeable": true,
        "deletable": true,
        "nPeople": 2,
        "nGroups": 1,
        "shared": "shared",
        "mine": true
      });
    expect(xfeClient.collections.get('eb3336fc49e63c596aec9b5096d650eb')).to.be.fulfilled;
  });

});
