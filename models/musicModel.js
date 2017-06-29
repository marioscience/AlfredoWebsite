var mongoose = require("mongoose");

// musicPlaylist songs need to have
var playlistSchema = new mongoose.Schema({
    songName: String,
    artist: String,
    songUrl: String
});

var musicSchema = new mongoose.Schema({
    videoUrl: String,
    musicPlaylist: [playlistSchema]
});

var Music = mongoose.model("Music", musicSchema);

module.exports = Music;