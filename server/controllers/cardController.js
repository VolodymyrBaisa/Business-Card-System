const db = require("../models");

// Defining methods for the cardsController
module.exports = {
    findAll: function (req, res) {
        db.Card.find({})
            .sort({ date: -1 })
            .then((data) => res.json(data))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Card.find({ _id: req.params.id })
            .then((data) => res.json(data))
            .catch((err) => res.status(422).json(err));
    },
};
