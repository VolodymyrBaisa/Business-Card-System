const db = require("../models");
const hash = require("../utils/hash");

// Defining methods for the userController
module.exports = {
    login: function (req, res) {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            _id: req.user._id,
            firstName: req.user.first_name,
            lastName: req.user.last_name,
            email: req.user.email,
            cards: req.user.cards,
        });
    },

    signup: function (req, res) {
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
        })
            .then(() => {
                res.redirect(307, "/api/user/login");
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    },

    logout: function (req, res) {
        req.logout();
        res.redirect("/");
    },

    authenticate: function (req, res) {
        // The user is not logged in, send back an empty object
        return !req.user
            ? res.status(401).end("user isn't logged in")
            : // Otherwise send back the user's email and id
              // Sending back a password, even a hashed password, isn't a good idea
              db.User.findOne({ _id: req.user._id }).then((result) => {
                  res.json({
                      _id: req.user._id,
                      firstName: result.first_name,
                      lastName: result.last_name,
                      email: result.email,
                      cards: result.cards,
                  });
              });
    },

    remove: function (req, res) {
        if (!req.user) {
            res.status(401).end("user isn't logged in");
        } else {
            db.User.remove({ id: req.body._id })
                .then(() => {
                    req.logout();
                    res.redirect("/");
                })
                .catch(console.log);
        }
    },

    update: async function (req, res) {
        db.User.updateOne(
            { _id: req.body._id },
            {
                $set: {
                    first_name: req.body.firstName,
                    last_name: req.body.lastName,
                    email: req.body.email,
                    password: await hash.getHash(req.body.password, 14),
                },
            }
        )
            .then(() => {
                db.User.findOne({ _id: req.body._id }).then((result) => {
                    res.json({
                        firstName: result.first_name,
                        lastName: result.last_name,
                        email: result.email,
                        cards: result.cards,
                    });
                });
            })
            .catch(console.log);
    },
};
