var mongoose = require("mongoose");

var RateSchema = new mongoose.Schema({
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

var rate = mongoose.model('Rate', RateSchema);

module.exports = rate;