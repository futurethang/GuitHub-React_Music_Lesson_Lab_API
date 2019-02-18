const router = require("express").Router();
const authUtils = require('../../client/src/utils/authMethods');
const lessonPlanController = require("../../controllers/lessonPlanController");

// Matches with "/api/lessonPlan/"
router.route("/")
  .get(lessonPlanController.findAll)
  .post(authUtils.validateLogin, lessonPlanController.create);

// Matches with "/api/lessonPlan/currentUser
router.route("/currentUser")
  .get(authUtils.validateLogin, lessonPlanController.findAllForUser);

// Matches with "/api/lessonPlan/:id"
router
  .route("/:id")
  .get(lessonPlanController.findById)
  .put(authUtils.validateLogin, lessonPlanController.update)
  .delete(authUtils.validateLogin, lessonPlanController.remove);

module.exports = router;
