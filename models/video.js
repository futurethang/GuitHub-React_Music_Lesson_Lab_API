const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  URL: String,
  dateSaved: { type: Date, default: Date.now },
  // future fields to indicate it's user-designated instrument, difficulty level, rating, etc.
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;