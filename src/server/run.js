'use strict';

let log = require('util').log;

module.exports = function(action) {
  return function (req, res, next) {
    log(req. method, req.url, req.user && req.user.id);

    co(function*() {
      let params = {};
      switch (req.method) {
        case 'GET':
          params = req.query;
          break;
        default:
          params = req.body;
          break;
      }

      for (let key in req.params) {
        params[key] = req.params[key];
      }
      let data = yield action(req, res, params);

      return data;
    }).then(function(data) {
      res.send({
        code: 0,
        data: data
      });
    }, function(err) {
      console.log(err.stack);
      res.send({
        code: 1,
        msg: err
      });
    })
  }
};
