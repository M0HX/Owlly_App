const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
categoryID: String,
name:String,
// places: [{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'Places'
// }]
},);

//Creating Model 
const Category = mongoose.model("Category" , categorySchema);

//export
module.exports = {Category};