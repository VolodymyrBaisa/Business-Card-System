const router = require("express").Router();
const userRouter = require("./user");
const cardRouter = require("./card");

router.use("/user", userRouter);
router.use("/card", cardRouter);
module.exports = router;
