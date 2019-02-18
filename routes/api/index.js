const router = require("express").Router();
const videosRoutes = require("./videoss");
const userRoutes = require("./users");
const lessonPlanRoutes = require("./lessonPlans");
const authRoutes = require("./auth-routes");

// videos routes
router.use("/videoss", videosRoutes);
router.use("/users", userRoutes);
router.use("/lessonPlans", lessonPlanRoutes);
router.use("/auth", authRoutes);

module.exports = router;
