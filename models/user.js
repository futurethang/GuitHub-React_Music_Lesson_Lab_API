const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator');

const UserSchema = new Schema({
  username: String,
  googleId: String,
  thumbnail: String,
  email: String, 
  // dateCreated: Date.now(),
  lessonPlans: [{type:Schema.Types.ObjectId, ref: 'LessonPlan'}]
  // future fields for date created, ???
});



module.exports = User = mongoose.model("user", UserSchema);
