module.exports = function () {
    return function (req, res, next) {
        if (req.isAuthenticated()) {
            res.statusMessage = {
                success: true,
                errorMessages: []
            };

            return next();
        } else {
            res.send({
                success: false,
                errorMessages: ["User not logged in."]
            });
        }
    }
};