'use strict';
var chai = require('chai');
var nock = require('nock');
var config = require("./config");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
describe('xfe.ipr', function() {

  it('exists', function() {
    var xfe = require('../dist/app.js');
    var xfeClient = new xfe(config.username, config.password);
    expect(xfeClient.ipr).to.exist;
  });

  it('responds to an IPR request', function() {
    var xfe = require('../dist/app.js');
    var xfeClient = new xfe(config.username, config.password);
    var apiResponse = {
      "ip": "1.2.3.4",
      "subnets": [
        {
          "geo": {
            "country": "Australia",
            "countrycode": "AU"
          },
          "ip": "1.2.3.0",
          "reason": "Regional Internet Registry",
          "created": "2012-03-22T07:26:00.000Z",
          "categoryDescriptions": {},
          "reasonDescription": "One of the five RIRs announced a (new) location mapping of the IP.",
          "score": 1,
          "cats": {},
          "subnet": "1.2.3.0/24"
        }
      ],
      "cats": {
        "Anonymization Services": 57,
        "Malware": 71,
        "Botnet Command and Control Server": 71
      },
      "geo": {
        "country": "Australia",
        "countrycode": "AU"
      },
      "score": 7.1,
      "reason": "Content found on multihoster",
      "reasonDescription": "At least one of the websites that is hosted on this IP address contains content of the aforementioned category.",
      "categoryDescriptions": {
        "Anonymization Services": "This category contains IP addresses of Web proxies (websites that allow the user to anonymously view websites). Furthermore, IP addresses are listed that can be used directly to surf anonymously (e.g. by adding them to the browser configuration).",
        "Malware": "This category lists IPs of malicious websites or malware hosting websites.",
        "Botnet Command and Control Server": "This category contains IP addresses that host a botnet command and control server."
      }
    };
    nock('https://api.xforce.ibmcloud.com')
      .get('/ipr/1.2.3.4')
      .reply(200, apiResponse);
    expect(xfeClient.ipr.get("1.2.3.4")).to.eventually.equal(apiResponse);
  });

});
