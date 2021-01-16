const router = require("express").Router();
<<<<<<< HEAD
const router = require("express").Router();
const cardController = require("../../../controllers/cardController");

// Matches with "/api/cards"
router.route("/").get(cardController.findAll).post(cardController.upload);
=======
const dashboardRoutes = require("./dashboard");
const userRoutes = require("./user");

// comments routes
router.use("/dashboard", dashboardRoutes);
// user routes
router.use("/user", userRoutes);
>>>>>>> main

// Matches with "/api/cards/:id"
router
  .route("/:id")
  .get(cardController.findById)
  .put(cardController.update)
  .delete(cardController.remove);

module.exports = router;
module.exports = router;
