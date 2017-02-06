var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var connection = require('./config/connection.js');

var exphbs = require("express-handlebars");
var controller = require('./controllers/burger_controller.js');

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(PORT, function(){
  console.log('Listening on PORT: ' + PORT);
})

