var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    // If the user has valid login, send them to the homepage
    app.get("/", function(req, res) {
        if (req.user) {
        res.redirect("/index.html");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    // If the user already has an account send them to the homepage
    app.get("/login", function(req, res) {
        if (req.user) {
        res.redirect("/index.html");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/index.html", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};