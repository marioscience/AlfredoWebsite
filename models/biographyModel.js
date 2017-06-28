var mongoose = require("mongoose");

// For gears the "type" property means the heading of the gear and items the gears under that heading.
var biographySchema = new mongoose.Schema({
    biographyText: String,
    picUrl: String,
    gear: [{
        gearType: String,
        items: [{
            name: String
        }]
    }]
});

var Biography = mongoose.model("Biography", biographySchema);

module.exports = Biography;