const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonPlanSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  tags: [{ type: String }],
  lastUpdated: { type: Date },
  videos: [ // maybe a useful model for one to may relationships elsewhere
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
    }
  ],
});

// Custom method `lastUpdatedDate`
lessonPlanSchema.methods.lastUpdatedDate = function () {
  // Set post's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

const LessonPlan = mongoose.model("LessonPlan", lessonPlanSchema);

module.exports = LessonPlan;
