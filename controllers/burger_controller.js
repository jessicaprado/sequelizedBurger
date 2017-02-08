var express = require('express');
var app = express();
var burger = require('./../models/burger.js');

app.get('/', function(req, res){
    burger.findAll({}).then(function(data){
		res.render('index', {
			burger: data 
		});
    })
});

app.post('/create', function (req, res){
	burger.create(
		{burger_name: req.body.burger}
	).then(function (data){
		res.redirect('/');
	});
});


app.put('/update/:id', function(req, res) {
	var condition = {
		devoured: 1
	}
	burger.update(condition, { 
		where: {
			id: req.params.id
		}
	}).then(function(data){
		//res.json(data);
		res.redirect('/');
	})
})

module.exports = app;
