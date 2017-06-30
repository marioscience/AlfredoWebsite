var Transcription = require("../models/transcriptionModel");

module.exports = function(app) {
    app.get("/api/transcription", function(req, res) {
        Transcription.find({}, function(err, transcription) {
            if(err) throw err;
            res.send(transcription);
        });
    });

    app.put("/api/transcription/description", function(req, res) {
        Transcription.findOneAndUpdate({}, {
            $set: { description: req.body.description }
        }, function(err) {
            if(err) throw err;
            res.send("Transcription description updated successfully.");
        })
    });

    app.post("/api/transcription", function(req, res) {
        Transcription.findOne({}, function(err, transcription) {
            transcription.transcriptions.push({
                title: req.body.title,
                videoUrl: req.body.videoUrl,
                description: req.body.description,
                pdfUrl: req.body.pdfUrl
            });

            transcription.save(function(err) {
                if(err) throw err;
            });

            res.send("Transcription added successfully.");
        });
    });

    app.put("/api/transcription", function(req, res) {
        Transcription.findOneAndUpdate({ "transcriptions._id": req.body.id }, {
            "transcriptions.$.title": req.body.title,
            "transcriptions.$.videoUrl": req.body.videoUrl,
            "transcriptions.$.description": req.body.description,
            "transcriptions.$.pdfUrl": req.body.pdfUrl
        }, function(err) {
            if(err) throw err;
            res.send("Transcription modified successfully.");
        });
    });

    app.delete("/api/transcription", function(req, res) {
        Transcription.findOneAndUpdate({}, {
            $pull: { "transcriptions": { "_id": req.body.id }}
        }, function(err) {
            if(err) throw err;
            res.send("Transcription deleted successfully.");
        });
    });
};