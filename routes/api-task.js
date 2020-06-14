const db = require("../models");

module.exports = function (app) {
    app.get("/api/Task", function (req, res) {
        db.Task.findAll({
            include: [
                db.Project,
                db.User
            ]
        }).then(function (dbTask) {
            res.json(dbTask)
        });
    });

    app.get("/api/Task/:id", function(req,res) {
        db.Task.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbTask){
            res.json(dbTask)
        });
    });

    app.post("/api/Task", function (req, res) {

        db.Task.create({
            
            taskName: req.body.taskName,
            projectId: req.body.projectId,
            assignedUserID: req.body.assignedUserID,
            taskDescription: req.body.taskDescription,


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

            taskName: req.body.taskName,
            ProjectId: req.body.ProjectId,
            assignedUserID: req.body.assignedUserID,
            taskDescription: req.body.taskDescription,


        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbTask) {
            res.json(dbTask);
        });
    });
}