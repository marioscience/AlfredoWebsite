var Biography = require("../models/biographyModel");

module.exports = function(app) {
    app.get("/api/biography", function(req, res) {
        Biography.findOne({}, function(err, biography) {
            if(err) throw err;
            res.send(biography);
        })
    });

    app.put("/api/biography", function(req, res) {
        Biography.findOneAndUpdate({}, {
            $set: {
                biographyText: req.body.biographyText,
                picUrl: req.body.picUrl
            }
        }, function(err) {
            if(err) throw err;
            res.send("Biography updated successfully.");
        });
    });

    app.post("/api/gear/type", function(req, res) {
        Biography.findOne({}, function(err, biography) {
            biography.gear.push({
                gearType: req.body.gearType,
                items: []
            });

            biography.save(function(err) {
                if(err) throw err;
            });

            res.send("Heading successfully added.");
        });
    });

    // Adds a gear item under a specified gearType
    app.post("/api/gear", function(req, res) {
        Biography.findOneAndUpdate({ "gear.gearType": req.body.gearType }, {
            "items": {
                $push: {
                    "name": req.body.gearName
                }
            }
        }, function(err) {
            if(err) throw err;
            res.send("Gear item added successfully.");
        });
    });

    app.put("/api/gear/type", function(req, res) {
        Biography.findOneAndUpdate({ "gear._id": req.body.id }, {
            $set: {
                "gearType": req.body.gearType
            }
        }, function(err) {
            if(err) throw err;
            res.send("Heading modified successfully.");
        });
    });

    app.put("/api/gear", function(req, res) {
        Biography.findOneAndUpdate({ "gear.items._id": req.body.id }, {
            "name": req.body.gearName
        }, function(err) {
           if(err) throw err;
           res.send("Gear item modified successfully.")
        });
    });

    // Issue warning because it deletes children items :D
    app.delete("/api/gear/heading", function(req, res) {
        Biography.findOneAndUpdate({}, {
            $pull: {
                "gear._id": req.body.id
            }
        }, function(err) {
            if(err) throw err;
            res.send("Heading deleted successfully.");
        });
    });

    app.delete("/api/gear", function(req, res) {
        Biography.findOneAndUpdate({ }, {
            $pull: {
                "gear.items._id": req.body.id
            }
        }, function(err) {
            if(err) throw err;
            res.send("Gear item successfully deleted.");
        });
    });
};