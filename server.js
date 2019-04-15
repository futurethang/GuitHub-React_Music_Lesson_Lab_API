const express = require("express");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup"); // required for functions in passport-setup to initialize before use in this file
const routes = require("./routes");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require('cookie-session');
const passport = require('passport')
const morgan = require('morgan')
const app = express();
const PORT = process.env.PORT || 8081;
require('dotenv').config()

// Define middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

///////////////

// set up view engine
app.set("view engine", "ejs");

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongoDB
mongoose.connect(keys.mongoDB.dbURI, () => {
  console.log('connected to mongodb')
});

// set up routes
app.use(routes);
// app.use("/api/auth", authRoutes);
// app.use("/api/profile", profileRoutes); /// needs to be replaced once REACT is working

///////////////

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
