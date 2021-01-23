const router = require("express").Router();
const userController = require("../../controllers/userController");
// Requiring passport as we've configured it
const passport = require("../../utils/passport");

// Matches with "/api/user/login"
router
    .route("/login")
    .post(passport.authenticate("local"), userController.login);

// Matches with "/api/user/signup"
router.route("/signup").post(userController.signup);

// Matches with "/api/user/logout"
router.route("/logout").get(userController.logout);

// Matches with "/api/user/authenticate"
router.route("/authenticate").post(userController.authenticate);

// Matches with "/api/user/remove"
router.route("/remove").post(userController.remove);

// Matches with "/api/user/update"
router.route("/update").post(userController.update);

module.exports = router;
