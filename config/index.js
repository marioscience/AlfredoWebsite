var config = require("./config");

module.exports = {
    filePaths: config.filePaths,
    getDBConnectionString: function(appEnv) {
        var dbUser = process.env[config[appEnv].dbusername];
        var dbPass = process.env[config[appEnv].dbpassword];

        return "mongodb://" + dbUser + ":" + dbPass + "@" + config[appEnv].host + ":" + config[appEnv].port + "/" + config[appEnv].database;

    }
};