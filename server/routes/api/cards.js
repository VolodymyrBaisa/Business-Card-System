const router = require("express").Router();
const cardController = require("../../controllers/cardController");
const multer = require("multer");

// Matches with "/api/cards"
router.route("/").get(cardController.findAll);

// Matches with "/api/cards/:id"
router.route("/:id").post(cardController.findById);

module.exports = router;
