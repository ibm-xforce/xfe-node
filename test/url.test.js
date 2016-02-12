'use strict';
var chai = require('chai');
var nock = require('nock');
var config = require("./config");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
describe('xfe.url', function() {

  it('exists', function() {
    var xfe = require('../dist/app.js');
    var xfeClient = new xfe(config.username, config.password);
    expect(xfeClient.url).to.exist;
  });

  it('responds to an URL request', function() {
    var xfe = require('../dist/app.js');
    var xfeClient = new xfe(config.username, config.password);
    var apiResponse = {
      "result": {
        "url": "google.com",
        "cats": {
          "Search Engines / Web Catalogs / Portals": true
        },
        "categoryDescriptions": {
          "Search Engines / Web Catalogs / Portals": "This category contains search engines, Web catalogs and Web portals. Dating sites, Social Networking sites and Business Networking sites are not listed here but in their own categories."
        },
        "score": 1
      }
    };
    nock('https://api.xforce.ibmcloud.com')
      .get('/url/google.com')
      .reply(200, apiResponse);
    expect(xfeClient.url.get("google.com")).to.eventually.equal(apiResponse);
  });

});
