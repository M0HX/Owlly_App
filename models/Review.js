const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    userID: String,
    placeID: String,
    reviewID: String,
    reviewContent: String,
}, {
    timestamps: true // means createdAt and updatedAt
});

// Creating Model 
const Review = mongoose.model("Review", reviewSchema);

module.exports = {Review};