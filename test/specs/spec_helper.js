process.env.NODE_ENV = "test";
chai = require('chai');
sinon = require('sinon');
path = require('path');

GLOBAL.rek = function (file, forceReload) {
  var forceRecord = forceReload || false;
  var modulePath = path.resolve(path.join(__dirname, "/../../", file));
  if (forceReload) {
    delete require.cache[modulePath];
  }
  return require(modulePath);
};

process.on('uncaughtException', console.log.bind(console));

GLOBAL.assert = require('assert');
GLOBAL._ = require('lodash');
GLOBAL.expect = chai.expect;
GLOBAL.sinon = sinon;
