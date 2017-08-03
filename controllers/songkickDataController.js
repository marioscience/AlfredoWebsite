var config = require("../config/config");

module.exports = function (app) {
    app.get("/api/concertschedule", function (req, res) {
        console.log("api key: ", process.env[config.songKickCredentials.apiKey]);
    });
};