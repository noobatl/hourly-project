const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./app/models")

//Create files for each table in database -- UNCOMMENT AFTER DATABASE IS SET
// const db = require("./app/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Routing for API
require("./app/routes/api-project")(app);
require("./app/routes/api-task")(app);
require("./app/routes/api-user")(app);
//require("./app/routes/api-time")(app);

//Routing for HTML
require("./app/routes/html-routes")


//Model has been setup
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

