const router = require("express").Router();
const cardController = require("../../controllers/cardController");
const middleware = require("../../middleware");

// Matches with "/api/cards"
router.route("/").get(cardController.findAll);

// Matches with "/api/cards/:id"
router.route("/:id").post(cardController.findById);

//Matches with "/api/cards/upload"
router
    .route("/upload/")
    .put(middleware.checkAuthentication, cardController.upload);

module.exports = router;
