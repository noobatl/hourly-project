const db = require("../models");

module.exports = function (app) {
    app.get("/api/Time", function (req, res) {
        db.TimeEntry.findAll({
            include: [{
                model: db.Task,
                include: [{
                    model: db.Project
                }]
            }]
    
        }).then(function (dbTimeEntry) {
            res.json(dbTimeEntry)
        });
    });

    app.get("/api/Time/:id", function(req,res) {
        db.Time.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: db.Task,
                model: db.Project
            }]
        }).then(function(dbTime){
            res.json(dbTime)
        });
    });

    app.post("/api/Time", function (req, res) {

        db.TimeEntry.create({

            date: req.body.date,
            TaskTaskId:req.body.TaskTaskId,
            timespent: req.body.timespent,
            notes: req.body.notes

        }).then(function (dbTime) {
            res.json(dbTime);
        });
    });

    app.delete("/api/Time/:id", function (req, res) {

        db.TimeEntry.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTime) {
            res.json(dbTime);
        });

    });

    app.put("/api/Time", function (req, res) {
        db.TimeEntry.update({

            date: req.body.date,
            timespent: req.body.timespent,
            notes: req.body.notes

        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbTime) {
            res.json(dbTime);
        });
    });
}
    