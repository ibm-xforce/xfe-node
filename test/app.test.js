'use strict';
var expect = require('chai').expect;
describe('xfe', function () {
  /**
   * Test 1: Project is successfully compiled, and can be imported.
   */
  it('can be imported without blowing up', function () {
    expect(require('../dist/app.js')).to.exist;
  });
  it('should create a new xfe object', function () {

    var xfe = require('../dist/app.js');
    var xfeClient = new xfe("username", "password");
    expect(xfeClient).to.exist;
  });
});
