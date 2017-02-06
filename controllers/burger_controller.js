var express = require('express');
var router = express.Router();
var burger = require('./../models/burger.js');

router.get('/', function(req, res){
	burger.all(function(data){
		var object = { burger: data }
		//console.log(object);
		res.render('index', object);
	});
});

router.post('/create', function (req, res){
	burger.create([req.body.burger, req.body.devoured], function (err, data){
		if (err) throw err;
    	res.redirect("/");
	});
});

router.put('/update/:id', function(req, res) {
	var condition = req.params.id;
	console.log(condition);
	burger.update(condition, function(){
		res.redirect('/');
	})
})

module.exports = router;