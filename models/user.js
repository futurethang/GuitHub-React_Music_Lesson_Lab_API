const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
    // unique username
    unique: true
  },
  // future fields for date created, ???
});

const User = mongoose.model("User", userSchema);

module.exports = User;
