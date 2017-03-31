var mongoose = require('mongoose');
var connection_string = 'mongodb://localhost/mongoserver';

mongoose.connect(connection_string);
var db = mongoose.connection;

module.exports = db;