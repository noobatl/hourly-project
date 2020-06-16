const db = require("../models");
module.exports = function (app) {
  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  app.get("/api/user/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  app.delete("/api/user/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  app.put("/api/user", function (req, res) {
    db.User.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
};
