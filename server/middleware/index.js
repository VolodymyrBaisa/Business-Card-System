module.exports = {
    //this is a middleware to check if user is authenticated
    checkAuthentication: function (req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.status(401).end("user isn't logged in");
        }
    },
};
