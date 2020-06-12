const db = require("../models");

module.exports = function (app) {
    app.get("/api/Project", function (req, res) {
        db.Project.findAll({
            include: [db.Task]
        }).then(function (dbProject) {
            res.json(dbProject)
        });
    });

    app.post("/api/Project", function (req, res) {
        
        db.Project.create({

            title: req.body.title,
            budget: req.body.budget,
            description: req.body.description,
            team : req.body.team,
            status: req.body.status

        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    app.delete("/api/Project/:id", function (req, res) {

        db.Project.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });

    });

    app.put("/api/Project", function (req, res) {
        db.Project.update({

            title: req.body.title,
            budget: req.body.budget,
            description: req.body.description,
            team : req.body.team,
            status: req.body.status

        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });
}