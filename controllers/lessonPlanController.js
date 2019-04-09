const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.LessonPlan.find(req.query)
      .populate("creator")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find all LessonPlans for current user
  findAllForUser: function(req, res) {
    console.log("REQ BODY",req.user);
    db.LessonPlan.find({ creator: req.user._id })
      // Populate to return user object instead of user ID ie. user who created the LessonPlan
      .populate("creator")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.LessonPlan.findById(req.params.id)
      .populate("creator")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("CREATE!");
    // req.body.postedBy = req.user._id;
    db.LessonPlan.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.LessonPlan.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    console.log("BEGIN REMOVE"), req.params.id;
    db.LessonPlan.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
