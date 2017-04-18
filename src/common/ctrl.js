'use strict';

var fs = require('fs');
var path = require('path');

var exports = {};
var dir = fs.readdirSync(__dirname + '/../controller');
for (let i = 0, len = dir.length; i < len; i++) {
  if (path.extname(dir[i]) !== '.js') continue;
  exports[_.toCamel(path.basename(dir[i], '.js'))] = require(__dirname + '/../controllers' + dir[i]);
}

module.exports = exports;
