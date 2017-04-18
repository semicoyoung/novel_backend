'use strict';

require('../common/global');
let express = require('express');
let router = require('./router');

let app = express();

let bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({extended: false}));
app.use(require('compression')());
app.use(require('connect-timeout')(config.timeout * 1000, {respond: false}));
app.use(require('cookie-parser')());

app.use(function(req, res, next) {
  req.on('timeout', function () {
    res.send({
      code: 0,
      msg: 'connect timeout',
    });
    process.nextTick(function () {
      res.send = res.end = function () {
      };
    });
  })
  next();
});

router(app);

process.on('uncaughtException', function (err) {
  console.error('Global:');
  console.error(err);
  process.exit(0);
});

// 监听
app.listen(config.port);
console.log('novel-Backend server start: ' + config.port);


