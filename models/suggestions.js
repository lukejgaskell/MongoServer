var mongoose = require("mongoose");

var SuggestionSchema = new mongoose.Schema({
    suggestion: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var suggestion = mongoose.model('Suggestion', SuggestionSchema);

module.exports = suggestion;