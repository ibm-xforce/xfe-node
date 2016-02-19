'use strict';
var chai = require('chai');
var nock = require('nock');
var config = require("./config");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
describe('xfe.files', function() {

  var xfe;
  var xfeClient;
  beforeEach(function() {
    xfe = require('../dist/app.js');
    xfeClient = new xfe(config.username, config.password);
  });

  it('exists', function() {
    expect(xfeClient.files).to.exist;
  });

  it('get file intel', function() {
    var apiResponse = { candidates:
      [ { type: 'IP', value: '1.2.3.4' },
        { type: 'URL', value: 'http://google.com' } ] };
    nock('https://api.xforce.ibmcloud.com')
      .post('/files')
      .reply(200, apiResponse);
    expect(xfeClient.files.getIntel("./test/fixtures/importtest.txt")).to.eventually.equal(apiResponse);
  });

});
