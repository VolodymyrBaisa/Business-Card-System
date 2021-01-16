const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRouter = require("./user");
const cardRouter = require("./card");

router.use("/api", apiRoutes);
router.use("/user", userRouter);
router.use("/card", cardRouter);
<<<<<<< HEAD
//If no API routes are hit, send the React app
router.use(function (req, res) {
  res.redirect("/");
});
=======

router.use(function(req, res) {
    res.redirect('/')
  });
  
>>>>>>> main
module.exports = router;
