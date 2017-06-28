var express = require("express");
var config = require("./config");
var mongoose = require("mongoose");

var setupData = require("./controllers/setupController");

var app = express();

// Set Prod/Test server port in environment variables. For Dev use 3000
var port = process.env.PORT || 3000;
var appEnv = process.env.NODE_ENV || "development";

app.use(config.filePaths.client, express.static(__dirname + config.filePaths.server));
app.set("view engine", "pug");

mongoose.connect(config.getDBConnectionString(appEnv));
setupData(app);

app.listen(port);