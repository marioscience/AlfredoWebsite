var mongoose = require("mongoose");

// musicPlaylist songs need to have
var musicSchema = new mongoose.Schema({
    videoUrl: String,
    musicPlaylist: [{
        songName: String,
        artist: String,
        songUrl: String
    }]
});

var Music = mongoose.model("Music", musicSchema);

module.exports = Music;