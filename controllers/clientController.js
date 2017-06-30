module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
    });

    // Add Authentication
    app.get("/admin", function(req, res) {
        res.render("admin");
    });
};