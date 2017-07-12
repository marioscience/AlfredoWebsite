var mongoose = require("mongoose");

var introductionSchema = new mongoose.Schema({
    title: String,
    description: String,
    introductionPicUrl: String
});

var Introduction = mongoose.model("Introduction", introductionSchema);

module.exports = Introduction;