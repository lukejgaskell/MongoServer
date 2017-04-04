

var express = require('express');
var app = express();

var server_port = 4000;
var server_ipaddress = "localhost"

var mongoose = require('mongoose');
var connection_string = 'mongodb://localhost/mongoserver';

mongoose.connect(connection_string);

var path = require('path');
var modelsDir = path.resolve(__dirname + '/models');

var MongoServer = require('./mongo-server');
MongoServer.init(app, mongoose, modelsDir);

app.listen(server_port, server_ipaddress, function () {
    console.log('MongoServer listening on port ' + server_port + '!');
});