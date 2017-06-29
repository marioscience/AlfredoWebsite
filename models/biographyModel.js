var mongoose = require("mongoose");

// For gears the "type" property means the heading of the gear and items the gears under that heading.
var gearItemSchema = new mongoose.Schema({
    name: String
});

var gearSchema = new mongoose.Schema({
    gearType: String,
    items: [gearItemSchema]
});

var biographySchema = new mongoose.Schema({
    biographyText: String,
    picUrl: String,
    gear: [gearSchema]
});

var Biography = mongoose.model("Biography", biographySchema);

module.exports = Biography;