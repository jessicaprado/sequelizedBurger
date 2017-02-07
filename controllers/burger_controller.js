var express = require('express');
var router = express.Router();
var burger = require('./../models/burger.js');

router.get('/', function(req, res){
    burger.findAll({}).then(function(data){
		res.render('index', {
			burger: data 
		});
    })
});

router.post('/create', function (req, res){
	burger.create({
		burger: req.body.burger, 
		devoured: req.body.devoured
	}).then(function (data){
    	res.redirect("/");
	});
});

/*
router.put('/update/:id', function(req, res) {
	var condition = req.params.id;
	console.log(condition);
	burger.update(condition, function(){
		res.redirect('/');
	})
})*/

module.exports = router;