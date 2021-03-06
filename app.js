// Dependencies
var express = require("express");
var config = require("./config");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Controllers
var setupData = require("./controllers/setupController");
var introductionController = require("./controllers/introductionController");
var musicController = require("./controllers/musicController");
var transcriptionController = require("./controllers/transcriptionController");
var biographyController = require("./controllers/biographyController");
var clientController = require("./controllers/clientController");
var songkickDataController = require("./controllers/songkickDataController");
var authController = require("./controllers/authController");

var app = express();

// Set Prod/Test server port in environment variables. For Dev use 3000
var port = process.env.PORT || 3000;
var appEnv = process.env.NODE_ENV || "development";

app.use(config.filePaths.client, express.static(__dirname + config.filePaths.server));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(config.getDBConnectionString(appEnv));

authController(app, appEnv);

setupData(app);
introductionController(app);
musicController(app);
transcriptionController(app);
biographyController(app);
clientController(app);
songkickDataController(app);

app.listen(port);