var Sequelize = require('sequelize');

var sequelize = new Sequelize('burger_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
