const db = require("../models");

module.exports = function (app) {
    //Display members, tasks or projects 

    app.get("/api/members", function (req, res) {
        db.members.findAll({}).then(function (dbmembers) {
            res.json(dbmembers)
        });
    });

    app.get("/api/tasks", function (req, res) {
        db.tasks.findAll({}).then(function (dbtasks) {
            res.json(dbtasks)
        });
    });

    app.get("/api/projects", function (req, res) {
        db.projects.findAll({}).then(function (dbprojects) {
            res.json(dbprojects)
        });
    });

    //Saves new member, task or project
    app.post("/api/members", function (req, res) {

        db.members.create({

            //Insert database information here

        }).then(function (dbmembers) {
            res.json(dbmembers);
        });
    });

    app.post("/api/tasks", function (req, res) {

        db.tasks.create({

            //Insert database information here

        }).then(function (dbtasks) {
            res.json(dbtasks);
        });
    });

    app.post("/api/projects", function (req, res) {

        db.projects.create({

            //Insert database information here

        }).then(function (dbprojects) {
            res.json(dbprojects);
        });
    });

    //Deletes member, task or project (will delete all information associated with id)
    app.delete("/api/members/:id", function (req, res) {

        db.members.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbmembers) {
            res.json(dbmembers);
        });

    });

    app.delete("/api/tasks/:id", function (req, res) {

        db.tasks.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbtasks) {
            res.json(dbtasks);
        });

    });

    app.delete("/api/projects/:id", function (req, res) {

        db.projects.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbprojects) {
            res.json(dbprojects);
        });

    });

    //Updates member, task or project (assigned by id)
    app.put("/api/members", function (req, res) {
        db.members.update({

            //Database information

        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbmembers) {
            res.json(dbmembers);
        });
    });

    app.put("/api/tasks", function (req, res) {
        db.tasks.update({

            //Database information

        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbtasks) {
            res.json(dbtasks);
        });
    });

    app.put("/api/projects", function (req, res) {
        db.projects.update({

            //Database information

        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbprojects) {
            res.json(dbprojects);
        });
    });

}