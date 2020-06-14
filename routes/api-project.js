const db = require("../models");

module.exports = function (app) {
    app.get("/api/Project", function (req, res) {
        let query = {};

        if (req.query.project_id) {
            query.projectId = req.query.project_id;
        }

        db.Project.findAll({
            where: query,
            include: [db.Task]
        }).then(function (dbProject) {
            res.json(dbProject)
        });
    });

    app.get("/api/Project/:id", function (req, res) {
        db.Project.findOne({
            where: {
                projectId: req.params.id
            },
            include: [db.Task]
        }).then(function (dbProject) {
            res.json(dbProject)
        });
    });

    app.post("/api/Project", function (req, res) {

        db.Project.create(req.body).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    app.delete("/api/Project/:id", function (req, res) {

        db.Project.destroy({
            where: {
                projectId: req.params.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });

    });

    app.put("/api/Project", function (req, res) {
        db.Project.update(
            req.body,
            {
                where: {
                    projectId: req.body.id
                }
            }).then(function (dbProject) {
                res.json(dbProject);
            });
    });
}