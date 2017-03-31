var mongoose = require("mongoose");

var OtherSchema = new mongoose.Schema({
    mySchemaStuff: { type: String },
    stuff: { type: String },
    thisStuff: { type: String }
});

module.exports = mongoose.model('Other', OtherSchema, 'others');