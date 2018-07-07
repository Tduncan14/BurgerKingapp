// Dependcies
var express = require('express');

var bodyParser = require("body-parser");

var methodOverride = require("method-override");

var handlebars = require("express-handlebars");

// using the express
var app = express ();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
     extended:false
}));

app.set('view engine',"handlebars");

var PORT =3000;

var routes = require('/controllers/routes.js');
app.use('/',routes);

app.listen("the server is listen" + PORT);

