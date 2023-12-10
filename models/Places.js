// Dependencies 
//Load the Modules
const mongoose = require("mongoose");

//Author Schema
const placesSchema = mongoose.Schema({
    name: String,
    content: String,
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
}],
});

//Author Model
const Places = mongoose.model("Places", placesSchema);
//Export 
module.exports = {Places};