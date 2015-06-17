'use strict';

var express = require('express');
var renderer = require('react-engine');
require('babel/register');

var app = express();

app.use(express.static(__dirname + '/public'));

// create the view engine with `react-engine`
var engine = renderer.server.create();

// set the engine
app.engine('.js', engine);

// set the view directory
app.set('views', __dirname + '/src/js/components');

app.set('view engine', 'js');

app.set('view', renderer.expressView);

app.use('/', function(req, res) {
    res.render('index');
});

app.listen(3005);
