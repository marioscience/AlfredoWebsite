var Home = require("../models/homeModel");

module.exports = function(app) {
    app.get("/api/home", function(req, res) {
        Home.findOne({}, function(err, result) {
            if(err) throw err;
            res.send(result);
        });
    });

    app.put("/api/home", function(req, res) {

        /* For added functionality it could check if the home object doesn't exist. if id doesn't then create */
        Home.findByIdAndUpdate(req.body.id, {
            title: req.body.id,
            description: req.body.description,
            homePicUrl: req.body.homePicUrl
        }, function(err, result) {
            if(err) throw err;
            res.send(result);
        });
    });
};

