const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRouter = require("./user");
const cardRouter = require("./card");

router.use("/api", apiRoutes);
router.use("/user", userRouter);
router.use("/card", cardRouter);

router.use(function(req, res) {
    res.redirect('/')
  });
  
module.exports = router;
