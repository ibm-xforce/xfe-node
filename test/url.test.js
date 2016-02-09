'use strict';
var expect = require('chai').expect;
var nock = require('nock');
describe('xfe.url', function() {

  it('exists', function() {
    var xfe = require('../dist/app.js');
    var xfeClient = new xfe("username", "password");
    expect(xfeClient.url).to.exist;
  });

  it('responds to an URL request', function() {
    var xfe = require('../dist/app.js');
    var xfeClient = new xfe("username", "password");
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
    nock('http://api.xforce.ibmcloud.com')
      .get('/url/google.com')
      .reply(200, apiResponse);
    xfeClient.url.get("google.com").then(function(body) {
      expect(body).to.equal(apiResponse);
    });
  });

});
