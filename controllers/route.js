var express = require('express');
var rout = express.Router(); //router
var burger = require('../models/burger.js');


rout.get('/', function(req,res) {
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index');

    });
});

rout.put('/burgers/update',function(req,res) {
    burger.update(req.body.burger_id,function(result){
        console.log(result);
        res.redirect('/');
    });

});

rout.post('/burgers/create',function(req,res){
 burger.create(req.body.burger_name,function(result){
     res.redirect('');
 })
});

module.exports = rout;

 

  