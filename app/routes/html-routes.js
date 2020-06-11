var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    // If the user has valid login, send them to the homepage
    app.get("/", function(req, res) {
        if (req.user) {
        res.redirect("/index.html");
        }
        res.sendFile(path.join(__dirname, "../public/create-account.html"));
    });

    // If the user already has an account send them to the homepage
    app.get("/login", function(req, res) {
        if (req.user) {
        res.redirect("/index.html");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    // If a user who is not logged in tries to access these routes they will be redirected to the signup page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    })

    app.get("/create", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/create-account.html"));
    })

    app.get("/home", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/time", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/time.html"))
    });

    app.get("/add", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/add-project.html"))
    })

    app.get("/team", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/team-project.html"))
    })
};