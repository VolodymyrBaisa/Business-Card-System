const db = require("../models/card");

// Defining methods for the cardsController
module.exports = {
  findAll: function (req, res) {
    db.Cards.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log(req.params.id);
    db.Cards.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  upload: function (req, res) {
    // if no user on the session
    if (!req.user) return res.status(401).end("user isn't authenticated");

    db.Cards.create({ ...req.body, email: req.user.email })
      .then(({ img }) =>
        db.User.findOneAndUpdate(
          { username: req.body.username },
          { desc: req.body.desc },
          {
            img: {
              data: fs.readFileSync(
                path.join(__dirname + "/uploads/" + req.file.filename)
              ),
              contentType: "image/png",
            },
          }
        )
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Cards.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Cards.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
