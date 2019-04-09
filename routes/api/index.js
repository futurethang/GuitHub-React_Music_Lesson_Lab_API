const router = require("express").Router();
const videosRoutes = require("./videos");
const userRoutes = require("./users");
const lessonPlanRoutes = require("./lessonPlans");
// const authRoutes = require("./auth-routes");
// const profileRoutes = require("./profile-routes")

// videos routes
router.use("/videos", videosRoutes);
router.use("/users", userRoutes);
router.use("/lessonPlans", lessonPlanRoutes);
// router.use("/auth", authRoutes);
// router.use("/profile", profileRoutes);

module.exports = router;
