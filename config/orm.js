var connection = require('../config/connection.js');

var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput +";";
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		})	
	},
	create: function(tableInput, vals, cb) {
		var queryString = "INSERT INTO " + tableInput + " (burger_name, devoured) VALUES (?, ?);";
		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result[0]);
		});
	},
	update: function(condition, cb) {
		var queryString = "UPDATE burger SET devoured=1 WHERE id =" + condition;
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result[0]);
		});
	}
};

module.exports = orm;

	

