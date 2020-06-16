// const db = require("../models");

// module.exports = function (app) {
//     app.get("/api/Time", function (req, res) {
//         db.Time.findAll({}).then(function (dbTime) {
//             res.json(dbTime)
//         });
//     });

//     app.post("/api/Time", function (req, res) {

//         db.Time.create({

//             date: req.body. //enter html id
//             timespent: req.body. //enter html id
//             notes: req.body. //enter html id

//         }).then(function (dbTime) {
//             res.json(dbTime);
//         });
//     });

//     app.delete("/api/Time/:id", function (req, res) {

//         db.Time.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function (dbTime) {
//             res.json(dbTime);
//         });

//     });

//     app.put("/api/Time", function (req, res) {
//         db.Time.update({

//             date: req.body. //enter html id
//             timespent: req.body. //enter html id
//             notes: req.body. //enter html id

//         }, {
//             where: {
//                 id: req.body.id
//             }
//         }).then(function (dbTime) {
//             res.json(dbTime);
//         });
//     });
// }
    