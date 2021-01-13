const router = require("express").Router();
const userRouter = require("./user");
const cardRouter = require("./card");

router.use("/user", userRouter);
router.use("/card", cardRouter);
//If no API routes are hit, send the React app
router.use(function (req, res) {
  res.redirect("/");
});
module.exports = router;
