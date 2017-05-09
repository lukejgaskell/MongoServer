var mongoose = require("mongoose");

var PlaceSchema = new mongoose.Schema({
    _id: { type: String, required: true, auto: false },
    exchanges: [new mongoose.Schema({
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
        })],
    rates: [new mongoose.Schema({
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
        })]
}, {
        timestamps: true
    });

var place = mongoose.model('Place', PlaceSchema);

module.exports = place;