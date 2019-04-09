const router = require("express").Router();
const authUtils = require('./authMethods');
const lessonPlanController = require("../../controllers/lessonPlanController");

// Matches with "/api/lessonPlan/"
router.route("/")
  .get(lessonPlanController.findAll)
  .post(authUtils.validateLogin, lessonPlanController.create);

// Matches with "/api/lessonPlan/myLessons
router.route("/myLessons")
  .get(authUtils.validateLogin, lessonPlanController.findAllForUser)

// Matches with "/api/lessonPlan/:id"
router.route("/:id")
  .get(lessonPlanController.findById)
  .put(authUtils.validateLogin, lessonPlanController.update)
  .delete(authUtils.validateLogin, lessonPlanController.remove)

// Matches with "/api/lessonPlan/createLesson"
router.route("/createLesson")
  .post(lessonPlanController.create)

module.exports = router;
