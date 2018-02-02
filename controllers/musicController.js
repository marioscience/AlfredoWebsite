var Music = require("../models/musicModel");
var authMiddleware = require("../middleware/userAuthMiddleware")();

module.exports = function(app) {
    app.get("/api/music/playlist", function(req, res) {
        Music.findOne({}, function(err, result) {
            res.send(result.musicPlaylist);
        });
    });

    app.get("/api/music", function(req, res) {
        Music.findOne({}, function(err, result) {
            res.send(result);
        });
    });

    // This request will receive a file later too
    app.put("/api/music/video", authMiddleware, function (req, res) {
        Music.findByIdAndUpdate(req.body.id, {
            $set: { videoUrl: req.body.videoUrl }
            },
            {new: true}
            , function (err, result) {
            if(err) throw err;

                res.send(result);
        });
    });

    app.post("/api/music/song", authMiddleware, function (req, res) {
        Music.findOne({}, function(err, music) {
            music.musicPlaylist.push({
                songName: req.body.songName,
                artist: req.body.artist,
                songUrl: req.body.songUrl
            });

            music.save(function(err) {
                if(err) throw err;
            });

            res.send("Song added successfully.");
        });
    });

    app.put("/api/music/song", authMiddleware, function (req, res) {
        Music.findOneAndUpdate({ "musicPlaylist._id": req.body.id }, {
            "musicPlaylist.$.songName": req.body.songName,
            "musicPlaylist.$.artist": req.body.artist,
            "musicPlaylist.$.songUrl": req.body.songUrl
            },
            {new: true},
            function (err, result) {
            if(err) throw err;
                res.send(result);
        });
    });

    //Issue warning because it deletes children items
    app.delete("/api/music/song", authMiddleware, function (req, res) {
        Music.findOneAndUpdate({}, {
            $pull: {
                "musicPlaylist": { "_id": req.body.id }
            }
        },function(err) {
            if(err) throw err;
            res.send("Song deleted successfully.");
        });
    });
};