'use strict';
var expect = require('chai').expect;
var nock = require('nock');
describe('xfe.iap', function() {

  it('exists', function() {
    var xfe = require('../dist/app.js');
    var xfeClient = new xfe("username", "password");
    expect(xfeClient.iap).to.exist;
  });

  it('responds to an URL request', function() {
    var xfe = require('../dist/app.js');
    var xfeClient = new xfe("username", "password");
    var apiResponse = {
      "application": {
        "canonicalName": "facebook",
        "name": "Facebook",
        "description": "A social network that interconnects people",
        "actionDescriptions": {
          "Write/Post/Chat": "An action that requires the input of plain text (via keyboard or from clipboard). Not included: An upload of a file",
          "Stream/Download": "Listen to an audio stream, watch a video stream, view or save an email attachment or download a file. Not included: View a profile or a post in a social network, view a picture on an image hoster, read the text of an email, view a document in an online collaboration tool",
          "Share": "Share a document, share an audio or video stream, upload a file, attach a file to an email",
          "Start App": "Start an App within a Web Application that supports third party Apps",
          "Audio Chat/Video Chat": "Audio/video communication"
        },
        "categories": {
          "Social Networking": true,
          "Social Media": true
        },
        "categoryDescriptions": {
          "Social Networking": "This category contains Web portals that provide a virtual community to find and connect to people interested in a particular shared subject. The sites enable their members to publish profiles including personal data / media and provide interpersonal communication channels. Business Networking sites are not listed here but in their own category.",
          "Social Media": "Includes Web sites that enable users to view, search for, rate and publish media files and streams."
        },
        "actions": {
          "Write/Post/Chat": true,
          "Stream/Download": true,
          "Share": true,
          "Start App": true,
          "Audio Chat/Video Chat": true
        },
        "rlfs": {
          "insecure communication": {
            "value": 22,
            "description": "Limited parts of this application are provided over an unencrypted connection"
          },
          "upload possible": {
            "value": 100,
            "description": "The application supports file uploading, which bears a risk of data leakage"
          },
          "host IPR": {
            "value": 4,
            "description": "Several IP addresses for this application have a bad reputation"
          }
        },
        "score": 2.5,
        "baseurl": "http://facebook.com/",
        "urls": [
          "apps.facebook.com",
          "attachment.fbsbx.com",
          "facebook.com",
          "facebook.net",
          "fb.me",
          "fbcdn-video-m-a.akamaihd.net",
          "fbcdn.net",
          "fbsbx.com",
          "s-static.ak.fbcdn.net",
          "static.ak.fbcdn.net",
          "upload.facebook.com"
        ]
      }
    };
    nock('http://api.xforce.ibmcloud.com')
      .get('/iap/facebook')
      .reply(200, apiResponse);
    xfeClient.iap.get("facebook").then(function(body) {
      expect(body).to.equal(apiResponse);
    });
  });

});
