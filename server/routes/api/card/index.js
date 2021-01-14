const router = require("express").Router();
const dashboardRoutes = require("./dashboard");
const userRoutes = require("./user");

// comments routes
router.use("/dashboard", dashboardRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
