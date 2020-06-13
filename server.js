const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Routing for API
require("./routes/api-project")(app);
require("./routes/api-task")(app);
require("./routes/api-user")(app);
require("./routes/api-time")(app);

//Routing for HTML
require("./routes/html-routes")(app);


//Model has been setup
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

