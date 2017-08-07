var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    user: "String",
    email: "String",
    password: "String",
    isAdmin: "boolean"
});

var User = mongoose.model("User", userSchema);

module.exports = User;