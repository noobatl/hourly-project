
var path = require("path");

module.exports = function(app) {

      //ADD IN ISAUTHENTICATED LATER
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

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