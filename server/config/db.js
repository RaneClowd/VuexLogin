const Sequelize = require('sequelize');

module.exports =  new Sequelize("oidev", "oidev", "Tf2sk~sK7!8A", {
  host: 'den1.mysql2.gear.host',
  dialect: "mysql",
  operatorsAliases:false,

  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// module.exports =  new Sequelize("SagelySown_OI", "signinsrvcacct", "P=#,r=@q*pi)W4KZ,+&M", {
//   host: '192.168.254.129',
//   dialect: "mysql",
//   operatorsAliases:false,

//   pool: {
//     max: 50,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });