var path = require("path");

module.exports = function(app) {
// Set angular to be client by pointing to build in public
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/build/index.html"));
    });
};