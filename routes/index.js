const express = require("express");
const app = express();
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth-routes");
const profileRoutes = require("./profile-routes")

// API Routes
router.use("/api", apiRoutes);
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);

// set up home view
router.use("/", (req, res) => {
  res.render("home", { user: req.user});
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.send("No file to render");
});

module.exports = router;
