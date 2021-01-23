const router = require("express").Router();
const apiRouter = require("./api");

//Api routes
router.use("/api", apiRouter);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.redirect("/");
});

module.exports = router;
