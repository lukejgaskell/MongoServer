
var express = require('express');
var app = express();


var server_ipaddress = "127.0.0.1";
var server_port = 4000;
var db = require('./config/DatabaseConfig');
var fs = require('fs');
var mongoose = require('mongoose');
var Controller = require('./controller');
var Repository = require('./repository');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

fs.readdir('./models', function (err, items) {
    for (var i = 0; i < items.length; i++) {
        var name = items[i].substring(0, items[i].length - 3);
        var model = require('./models/' + items[i]);
        var repository = new Repository(name, model);
        var controller = new Controller(name, repository, app);
    }
});

app.listen(server_port, server_ipaddress, function () {
    console.log('MongoServer listening on port ' + server_port + '!');
});

