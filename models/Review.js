const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    reviewID: String,
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    placeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    },
    reviewContent: String,
    reviewerName: String, // reviewer's name
}, {
    timestamps: true
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
