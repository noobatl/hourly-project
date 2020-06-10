const db = require("../models");

module.exports = function (app) {
    app.get("/api/Task", function (req, res) {
        db.Task.findAll({}).then(function (dbTask) {
            res.json(dbTask)
        });
    });

    app.post("/api/Task", function (req, res) {

        db.Task.create({
            
            taskName: req.body.title,
            projectID: req.body.projectID,
            assignedUserID: req.body.assignedUserID

        }).then(function (dbTask) {
            res.json(dbTask);
        });
    });

    app.delete("/api/Task/:id", function (req, res) {

        db.Task.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTask) {
            res.json(dbTask);
        });

    });


    app.put("/api/task", function (req, res) {
        db.Task.update({

            taskName: req.body.title,
            projectID: req.body.projectID,
            assignedUserID: req.body.assignedUserID

        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbTask) {
            res.json(dbTask);
        });
    });
}