const db = require("../models");

module.exports = function (app) {
    app.get("/api/Project", function (req, res) {
        db.Project.findAll({
            //include: [db.Task]
        }).then(function (dbProject) {
            res.json(dbProject)
        });
    });

    app.post("/api/Project", function (req, res) {
        
        db.Project.create({

            name: req.body.addProjectName,
            budget: req.body.addProjectBudget,
            description: req.body.addProjectDesc,
            status: req.body.addProjectStatus

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

            name: req.body.addProjectName,
            budget: req.body.addProjectBudget,
            description: req.body.addProjectDesc,
            status: req.body.addProjectStatus

        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

}