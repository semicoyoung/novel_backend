'use strict';

exports.HM = new Sequelize(config.db.data_resource.database, config.db.data_resource.username, config.db.data_resource.password, {
  dialect: 'mysql',
  host: config.db.data_resource.host,
  port: config.db.data_resource.port,
  timezone: '+08:00',
  logging: undefined,
  pool: {
    maxConnections: config.db.data_resource.pool
  }
});


// let Sequelize = require('sequelize');
// let sequelize = new Sequelize('novel', 'eetyang', 'eetyang110630', {
//   host: 'eetyang.c53hwttk2cbn.us-west-2.rds.amazonaws.com',
//   dialect: 'mysql',
//   pool: {
//     max: 10
//   }
// });
