// Dependencies 
//Load the Modules
const mongoose = require("mongoose");

//Place Schema
const placeSchema = mongoose.Schema({
    placeID: String,
    name: String,
    content: String,
    placeImg: String,
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
}],
});

//Place Model
const Place = mongoose.model("Place", placeSchema);
//Export 
module.exports = {Place};