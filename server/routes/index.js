const router = require("express").Router();
const apiRouter = require("./api");
const cmsRouter = require("./cms");

//Api routes
router.use("/api", apiRouter);

//HTML routes
router.use("/cms", cmsRouter);

module.exports = router;
