var Introduction = require("../models/introductionModel");
var authMiddleware = require("../middleware/userAuthMiddleware")();

module.exports = function(app) {
    app.get("/api/introduction", function(req, res) {
        Introduction.findOne({}, function(err, result) {
            if(err) throw err;
            res.send(result);
        });
    });

    // First object added by initial data. When the app is running, the introduction can only be modified.
    app.put("/api/introduction", authMiddleware, function (req, res) {

        /* For added functionality it could check if the introduction object doesn't exist. if id doesn't then create */
        Introduction.findByIdAndUpdate(req.body._id, {
            title: req.body.title,
            description: req.body.description,
            introductionPicUrl: req.body.introductionPicUrl
            },
            {new: true},
            function (err, result) {
            if(err) throw err;
            res.send(result);
        });
    });
};