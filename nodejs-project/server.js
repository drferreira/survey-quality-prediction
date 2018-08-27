var defaultPort = 3000;
var express = require('express');
var app = express(),

port = process.env.PORT || defaultPort;
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/activity-prediction/routes/routes.js');

routes(app);
app.listen(port);
console.log('Otus Activity Prediction Microservice ready on port:' + port);
