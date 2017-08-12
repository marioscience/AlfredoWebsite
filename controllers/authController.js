var validator = require("express-validator");
var bcrypt = require("bcrypt");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require("../models/userModel");

module.exports = function (app, environment) {
    app.use(validator());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    //passport.use(new LocalStrategy());

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
    app.use(passport.initialize());
    app.use(passport.session());

    // Login, Register and password protected endpoints.
    app.post("/api/admin/register", function (req, res) {
        /* TODO: sanitization of inputs is needed here and in login service. */

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
        res.authStatus = {
            success: true,
            errorMessages: []
        };

        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {
                res.authStatus.success = false;
                res.authStatus.errorMessages = result.array();
                res.send(res.authStatus);
            } else {
                bcrypt.hash(req.body.password, saltRounds, hashPasswordHandler_factory(req, res));
            }
        });
    });

    app.post("/login", function (req, res) {
        /* TODO: sanitization of inputs is needed here and in register service. */

    });
};

function hashPasswordHandler_factory(req, res) {
    return function (err, passwordHash) {
        if (err) {
            res.authStatus.success = false;
            res.authStatus.errorMessages.push("Error hashing password");
            throw err;
        }

        User.find({}, insertUser_factory(req, res, passwordHash));
    }
}

function insertUser_factory(req, res, passwordHash) {
    return function (err, users) {
        if (err) {
            res.authStatus.errorMessages.push("Error in database. User find failed.");
            throw err;
        }

        var isAdmin = users.length === 0 || false;

        var newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: passwordHash,
            isAdmin: isAdmin
        });

        newUser.save(handleUserSave_factory(req, res));
    }
}

function handleUserSave_factory(req, res) {
    return function (error) {
        if (error) {
            if (error.code === 11000) {
                if (error.errmsg.includes("username")) {
                    res.authStatus.success = false;
                    res.authStatus.errorMessages.push("Username is already registered.");
                }
                if (error.errmsg.includes("email")) {
                    res.authStatus.success = false;
                    res.authStatus.errorMessages.push("Email is already registered.");
                }
                res.send(res.authStatus);
            }
        } else {
            res.authStatus.success = true;
            res.send(res.authStatus);
        }
    }
}