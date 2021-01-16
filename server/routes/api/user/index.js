const router = require("express").Router();

// const userController = require("../../../controllers/userController");
// // Requiring passport
// const passport = require("../../utils/passport");

// // Matches with "/api/user/login"
// router
//     .route("/login")
//     // passport.authenticate middleware
//     // If the user has valid login credentials go to the members page.
//     // Otherwise the user will be sent an error
//     .post(passport.authenticate("local"), userController.login);

// // Matches with "/api/user/signup"
// router.route("/signup").post(userController.signup);

// // Matches with "/api/user/logout"
// router
//     .route("/logout")
//     // Route for logging user out
//     .get(userController.logout);

// // Matches with "/api/user/authenticate"
// router
//     .route("/authenticate")
//     // Route for getting user data
//     .post(userController.authenticate);

module.exports = router;
