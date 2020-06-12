var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // If the user has valid login, send them to the homepage
  app.get("*", function (req, res) {
    if (req.user) {
      res.redirect("./public/login.html");
    }
    res.sendFile(path.join(__dirname, "./public/signup.html"));
  });
  // If the user already has an account send them to the homepage
  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("../public/login.html");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // If a user who is not logged in tries to access these routes they will be redirected to the signup page
  app.get("/home", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/time", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/time.html"));
  });

  app.get("/add", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/add-project.html"));
  });

  app.get("/team", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/team-project.html"));
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
