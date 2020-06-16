
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    // If the user has valid login, send them to the homepage
    app.get("/", function(req, res) {
        res.redirect("/create")
    });

    app.get("/create", function (req,res) {
        if (req.user) {
            res.redirect("/home");
          }
        res.sendFile(path.join(__dirname, "../public/create-account.html"));
    })

    app.get("/login", function(req, res) {
        if (req.user) {
          res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });

      //ADD IN ISAUTHENTICATED LATER
      app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
      
      app.get("/team", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/team-members.html"));
      });

      app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/add-project.html"));
      });

      app.get("/time", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/time.html"));
      });

      app.get("/addteam", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/add-user.html"));
      });
    
    //ADD IN ISAUTHENTICATED LATER
    

};