const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    reviewID: String,
    userID: String,
    placeID: String,
    reviewContent: String
}, {
    timestamps: true // means createdAt and updatedAt
});

// Creating Model 
const Review = mongoose.model("Review", reviewSchema);

module.exports = {Review};