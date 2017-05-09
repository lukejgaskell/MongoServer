var mongoose = require("mongoose");

var CurrencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

var currency = mongoose.model('Currency', CurrencySchema);

module.exports = currency;