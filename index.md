#  xfe-node
# X-Force Exchange Node SDK

| Info          | Badges        |
| ------------- | ------------- |
| License  | [![Apache license][license-image]][license-url]  |
| Testing  | [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] |
| Quality |  [![Dependencies status][dep-status-image]][dep-status-url]|
| Stats |  [![NPM Image][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
## Description

The X-Force Exchange Node SDK is a Node.js library for interacting with the [IBM X-Force Exchange](https://exchange.xforce.ibmcloud.com).
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

View full interface documentation [here](https://cdn.rawgit.com/ibm-xforce/xfe-node/v0.1.0/doc/index.html).

## Support
If you are having any questions or issues getting things to work, you can:

* Ask a question in [IBM DeveloperWorks Answers](https://developer.ibm.com/answers/index.html) under the [xfe-node](https://developer.ibm.com/answers/topics/xfe-node/) tag.

Project's issue on GitHub should be used discuss bugs and features.

## Contributing to the project

We welcome any contributions to the project. Please check the [CONTRIBUTING.md](.github/CONTRIBUTING.md) for contribution guidelines.

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
[npm-image]: https://img.shields.io/npm/v/xfe.svg
[downloads-image]: https://img.shields.io/npm/dm/xfe.svg
[npm-url]: https://www.npmjs.com/package/xfe


# Index

* *[Globals](globals.md)*
* Internals
* ["app/app"](modules/_app_app_.md)
* ["app/collections"](modules/_app_collections_.md)
* ["app/config"](modules/_app_config_.md)
* ["app/files"](modules/_app_files_.md)
* ["app/iap"](modules/_app_iap_.md)
* ["app/interfaces/collection"](modules/_app_interfaces_collection_.md)
* ["app/interfaces/collectionCreation"](modules/_app_interfaces_collectioncreation_.md)
* ["app/ipr"](modules/_app_ipr_.md)
* ["app/url"](modules/_app_url_.md)
* ["typings/main.d"](modules/_typings_main_d_.md)
* Externals
* ["typings/main/ambient/assertion-error/index.d"](modules/_typings_main_ambient_assertion_error_index_d_.md)
* ["typings/main/ambient/chai/index.d"](modules/_typings_main_ambient_chai_index_d_.md)
* ["typings/main/ambient/form-data/index.d"](modules/_typings_main_ambient_form_data_index_d_.md)
* ["typings/main/ambient/lodash/index.d"](modules/_typings_main_ambient_lodash_index_d_.md)
* ["typings/main/ambient/mocha/index.d"](modules/_typings_main_ambient_mocha_index_d_.md)
* ["typings/main/ambient/node-uuid-base/index.d"](modules/_typings_main_ambient_node_uuid_base_index_d_.md)
* ["typings/main/ambient/node-uuid-cjs/index.d"](modules/_typings_main_ambient_node_uuid_cjs_index_d_.md)
* ["typings/main/ambient/node-uuid/index.d"](modules/_typings_main_ambient_node_uuid_index_d_.md)
* ["typings/main/ambient/node/index.d"](modules/_typings_main_ambient_node_index_d_.md)
* ["typings/main/ambient/request/index.d"](modules/_typings_main_ambient_request_index_d_.md)



Generated using [TypeDoc](http://typedoc.io)
