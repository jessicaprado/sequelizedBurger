var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var burger = sequelize.define('burgers', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	burger_name: {
		type: Sequelize.STRING,
	},
	devoured: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	}
}, {
    timestamps: true
});

burger.sync();

module.exports = burger;