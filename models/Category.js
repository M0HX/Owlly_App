const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: String,
  place: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place'
  }],
  categoryImg: String, // Add this property for the category image
},);

// Creating Model 
const Category = mongoose.model("Category", categorySchema);

// export
module.exports = { Category };
