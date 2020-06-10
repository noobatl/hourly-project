const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./app/models")

//Create files for each table in database -- UNCOMMENT AFTER DATABASE IS SET
//const db = require("./app/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Routing for site
require("./app/routes/api-routes")(app);

//Model has been setup
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// app.listen(PORT, function () {
//   console.log("App listening on PORT " + PORT);
// });

