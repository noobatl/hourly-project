
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;


//Create files for each table in database -- UNCOMMENT AFTER DATABASE IS SET
//var db = require("./app/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));


//Routing for site
//require("./routes/api-routes.js")(app);

//UNCOMMENT WHEN DATABASES IN MODELS ARE SET-UP
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });