'use strict';
var chai = require('chai');
var nock = require('nock');
var config = require("./config");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
describe('xfe.collections', function() {

  it('exists', function() {
    var xfe = require('../dist/app.js');
    var xfeClient = new xfe(config.username, config.password);
    expect(xfeClient.collections).to.exist;
  });

  it('creates a collection given a file', function() {
    this.timeout(5000);
    var xfe = require('../dist/app.js');
    var xfeClient = new xfe(config.username, config.password);
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

});
