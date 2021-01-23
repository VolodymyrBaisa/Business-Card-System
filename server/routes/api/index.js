const router = require("express").Router();
const userRouter = require("./user.js");
const cardRouter = require("./cards.js");

router.use("/user", userRouter);
router.use("/cards", cardRouter);

module.exports = router;
