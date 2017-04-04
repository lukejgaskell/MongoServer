var mongoose = require("mongoose");

var ExchangeSchema = new mongoose.Schema({
    originalCurrency: {
        currency: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    },
    newCurrency: {
        currency: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }
}, {
        timestamps: true
    });

var exchange = mongoose.model('Exchange', ExchangeSchema);

module.exports = exchange;