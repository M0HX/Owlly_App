const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: String,
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
  
module.exports = mongoose.model('User', userSchema);
