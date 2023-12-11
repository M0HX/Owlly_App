// Dependencies 
//Load the Modules
const mongoose = require("mongoose");

//Author Schema
const placeSchema = mongoose.Schema({
    placeID: String,
    name: String,
    content: String,
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
}],
});

//Author Model
const Place = mongoose.model("Place", placeSchema);
//Export 
module.exports = {Place};