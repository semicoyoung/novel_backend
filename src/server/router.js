'use strict';

var run = require('./run');

module.exports = function (app) {
  app.get('/', run());
  app.all('*', function (req, res) {
    res.send({
      code: 1,
      msg: 'error'
    });
  });
}
