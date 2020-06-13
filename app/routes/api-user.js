const db = require("../models");

module.exports = function (app) {
    app.get("/api/User", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser)
        });
    });

    app.get("/api/User/:id", function(req,res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser)
        });
    });

    app.post("/api/User", function (req, res) {

        db.User.create({

            firstname: req.body.newMemberName,
            lastname: req.body.newMemberLastName,
            role: req.body.newMemberRole,
            email: req.body.newMemberEmail

        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.delete("/api/User/:id", function (req, res) {

        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });

    });

    app.put("/api/User", function (req, res) {
        db.User.update({

            firstname: req.body.newMemberName,
            lastname: req.body.newMemberLastName,
            role: req.body.newMemberRole,
            email: req.body.newMemberEmail

        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
}
    