const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonPlanSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "user" },
  title: { type: String, required: true },
  notes: { type: String },
  tags: [{ type: String }],
  lastUpdated: { type: Date },
  videos: [
    // maybe a useful model for one to may relationships elsewhere
    {
      type: Object
    }
  ],
  followers: [{ type: Schema.Types.ObjectId, ref: "user" }]
});

// Custom method `lastUpdatedDate`
lessonPlanSchema.methods.lastUpdatedDate = function() {
  // Set post's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

module.exports = LessonPlan = mongoose.model("LessonPlan", lessonPlanSchema);