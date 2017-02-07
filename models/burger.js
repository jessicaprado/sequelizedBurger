var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var burger = sequelize.define('burgers', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		validate: {
			notNull: true
		}, 
	},
	burger_name: {
		type: Sequelize.STRING,
		validate: {
			notNull: true,
			len: [1, 80] 
		},
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