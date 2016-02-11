# xfe-node

| Info          | Badges        |
| ------------- | ------------- |
| Version       | [![Bower version][bower-image]][bower-url]  |
| License  | [![Apache license][license-image]][license-url]  |
| Testing  | [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] |
| Quality |  [![Dependencies status][dep-status-image]][dep-status-url]  [![Code Climate][code-climate-image]][code-climate-url] |

## Description

xfe-node is a Node.js library for interacting with the [IBM X-Force Exchange](https://exchange.xforce.ibmcloud.com).
It provides a wrapper around the API which you can [use directly](https://api.xforce.ibmcloud.com) and 
also provides some convenience functionality.

## Installation

First, install npm on your machine. Then install the library in your project with
```shell
npm install xfe --save
```

## How to Use

Obtain an [API username and password](https://exchange.xforce.ibmcloud.com/settings/api)

```javascript
var xfe = require("xfe");
var xfeClient = new xfe("api username", "api password");

xfeClient.ipr.get("1.2.3.4").then(function(response) {
  console.log(response);
})
```

## Support
If you are having any questions or issues getting things to work, you can:

* Ask a question in [IBM DeveloperWorks Answers](https://developer.ibm.com/answers/index.html) under the [xfe-node](https://developer.ibm.com/answers/topics/xfe-node/) tag.

Project's issue on GitHub should be used discuss bugs and features.

## Contributing to the project

We welcome any contributions to the project. Please check the [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

Check out our contributors [here](https://github.com/ibm-xforce/xfe-node/graphs/contributors)

### Development
#### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install global dev dependencies: `npm install -g gulp`
* Install local dev dependencies: `npm install` while current directory is xfe-node repo

#### Build
* Build the whole project: `gulp` - this will run `lint`, `build`, and `test` targets

### Release
* Use GitHub's release tool to draft and publish a release. I like the format better than
changelogs.

[bower-image]: https://img.shields.io/bower/v/xfe-node.svg?style=flat-square
[bower-url]: http://bower.io/search/?q=xfe-node
[build-image]: http://img.shields.io/travis/ibm-xforce/xfe-node.svg?style=flat-square
[build-url]: https://travis-ci.org/ibm-xforce/xfe-node
[dep-status-image]: https://img.shields.io/david/ibm-xforce/xfe-node.svg?style=flat-square
[dep-status-url]: https://david-dm.org/ibm-xforce/xfe-node
[coverage-image]: https://img.shields.io/coveralls/ibm-xforce/xfe-node.svg?style=flat-square
[coverage-url]: https://coveralls.io/r/ibm-xforce/xfe-node?branch=master
[code-climate-image]: https://img.shields.io/codeclimate/github/ibm-xforce/xfe-node.svg?style=flat-square
[code-climate-url]: https://codeclimate.com/github/ibm-xforce/xfe-node
[license-image]: http://img.shields.io/badge/license-Apachev2-blue.svg?style=flat-square
[license-url]: http://www.apache.org/licenses/LICENSE-2.0
