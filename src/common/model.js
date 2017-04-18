'use strict';

let fs = require('fs');
let path = require('path');

var exports = {};
exports.mysql = {};
exports.mongo = {};
exports.postgresql = {};

var dir = fs.readdirSync(srcFolder + '/model/mongo');
for (let i = 0, len = dir.length; i < len; i++) {
  if (path.extname(dir[i]) !== '.js') continue;
  exports['mongo'][_.toCamel(path.basename(dir[i], '.js'))] = require(srcFolder + '/model/mongo' + dir[i]);
}

var dir = fs.readdirSync(srcFolder + '/model/mysql');
for (let i = 0, len = dir.length; i < len; i++) {
  if (path.extname(dir[i]) !== '.js') continue;
  exports['mysql'][_.toCamel(path.basename(dir[i], '.js'))] = require(srcFolder + '/model/mysql' + dir[i]);
}

module.exports = exports;
