const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
name:String,
},{
    timestamps:true //means createdAt and updatedAt
});

//Creating Model 
const Article = mongoose.model("Article" , articleSchema);

//export
module.exports = {Article};