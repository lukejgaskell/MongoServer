var mongoose = require("mongoose");

var exchanges = require('./exchanges');
var rates = require('./rates');

var PlaceSchema = new mongoose.Schema({
    placeId: { type: String, required: true },
    exchanges: [ exchanges.schema ],
    rates: [ rates.schema ]
}, {
    timestamps: true
});

var place = mongoose.model('Place', PlaceSchema);

module.exports = place;