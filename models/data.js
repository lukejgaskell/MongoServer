var mongoose = require("mongoose");

var DataSchema = new mongoose.Schema({
    myField: { type: Number },
    otherField: { type: String },
    st: { type: Number }
});

module.exports = mongoose.model('Data', DataSchema, 'datas');