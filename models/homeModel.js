var mongoose = require("mongoose");

var homeSchema = new mongoose.Schema({
    title: String,
    description: String,
    homePicUrl: String
});

var Home = mongoose.model("Home", homeSchema);

module.exports = Home;