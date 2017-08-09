var session = require("express-session");
var validator = require("express-validator");
var bcrypt = require("bcrypt");

var User = require("../models/userModel");

module.exports = function (app, environment) {
    app.use(validator());

    var saltRounds = 10;

    /* TODO: Save secret somewhere safe (hint: environment variable) */
    var sessionOptions = {
        secret: "laheuaobuebpowufpoIAFADsdfwef",
        resave: true,
        saveUninitialized: false,
        cookie: {},
        name: "alfredoweb-ssid"
    };

    if (environment === "production") {
        app.set("trust proxy", 1);
        sessionOptions.cookie.secure = true;
    }

    app.use(session(sessionOptions));

    // Login, Register and password protected endpoints.
    app.post("/api/admin/register", function (req, res) {

        // Validate data !!!
        req.checkBody("username", "Username cannot be empty.").notEmpty();
        req.checkBody("username", "Username is too short.").len(4);

        req.checkBody("email", "Email is not valid.").isEmail();
        req.checkBody("email", "Email is too short.").len(7);

        req.checkBody("password", "Password doesn't meet minimum requirements.").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "i");
        req.checkBody("passwordMatch", "Passwords must match").equals(req.body.password);

        // Sanitize
        // Check if user exists !!!

        // Set first user as admin !!!
        var errors = [];

        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {
                errors = result.array();
                res.send(errors);
            } else {
                bcrypt.hash(req.body.password, saltRounds, hashPasswordHandler_factory(req, res, errors));
            }
        });
    });

    app.post("/login", function (req, res) {

    });
};

function hashPasswordHandler_factory(req, res, errors) {
    return function (err, passwordHash) {
        if (err) {
            errors.push("Error hashing password");
            throw err;
        }

        User.find({}, insertUser_factory(req, res, errors, passwordHash));
    }
}

function insertUser_factory(req, res, errors, passwordHash) {
    return function (err, users) {
        if (err) {
            errors.push("Error in database. User find failed.");
            throw err;
        }

        var isAdmin = users.length === 0 || false;

        var newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: passwordHash,
            isAdmin: isAdmin
        });

        newUser.save(handleUserSave_factory(req, res, errors));
    }
}

function handleUserSave_factory(req, res, errors) {
    return function (error) {
        if (error) {
            if (error.code === 11000) {
                if (error.errmsg.includes("username")) {
                    errors.push("Username is already registered.");
                }
                if (error.errmsg.includes("email")) {
                    errors.push("Email is already registered.");
                }
                res.send({messages: errors});
            }
        } else {
            res.send("User added succesfully");
        }
    }
}