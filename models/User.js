
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    isAdmin: {type: Boolean, default: false},
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String

  }, {
    timestamps: true
});

// Creating Model 
const User = mongoose.model("User", userSchema);

module.exports = {User};