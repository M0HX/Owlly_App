const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
name:String,
place: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Place'
}]
},);

//Creating Model 
const Category = mongoose.model( "Category" , categorySchema);

//export
module.exports = {Category};