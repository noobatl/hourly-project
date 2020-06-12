const db = require("../models");

module.exports = function (app) {
    app.get("/api/Time", function (req, res) {
        db.TimeEntry.findAll({}).then(function (dbTimeEntry) {
            res.json(dbTimeEntry)
        });
    });

    app.post("/api/Time", function (req, res) {

        db.Time.create({

            date: req.body.date,
            timespent: req.body.timespent,
            notes: req.body.notes

        }).then(function (dbTime) {
            res.json(dbTime);
        });
    });

    app.delete("/api/Time/:id", function (req, res) {

        db.Time.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTime) {
            res.json(dbTime);
        });

    });

    app.put("/api/Time", function (req, res) {
        db.Time.update({

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
    