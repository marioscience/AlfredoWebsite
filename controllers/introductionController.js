var Introduction = require("../models/introductionModel");
var authMiddleware = require("../middleware/userAuthMiddleware")();

module.exports = function(app) {
    app.get("/api/introduction", function(req, res) {
        Introduction.findOne({}, function(err, result) {
            if(err) throw err;
            res.send(result);
        });
    });

    app.put("/api/introduction", authMiddleware, function (req, res) {

        /* For added functionality it could check if the introduction object doesn't exist. if id doesn't then create */
        Introduction.findByIdAndUpdate(req.body.id, {
            title: req.body.title,
            description: req.body.description,
            introductionPicUrl: req.body.introductionPicUrl
        }, function(err, result) {
            if(err) throw err;
            res.send(result);
        });
    });
};

