var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false}
});

var User = mongoose.model("User", userSchema);

module.exports = User;