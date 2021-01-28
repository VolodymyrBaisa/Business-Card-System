const db = require("../models");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/cards");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const insetCardToDb = async (cardInfo, fileName) => {
    const data = {
        ...cardInfo,
        cardTags: cardInfo.cardTag,
        date: Date.now(),
        img: "/uploads/cards/" + fileName,
    };
    return await db.Card.create(data);
};

const insertCardIdToUser = async (userInfo, card) => {
    const userId = userInfo._id;
    console.log(userId);
    return await db.User.findOneAndUpdate(
        { _id: userId },
        { $push: { cards: "" + card._id } }
    );
};

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
    upload: function (req, res) {
        const upload = multer({ storage: storage }).single("file");
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err);
            } else if (err) {
                return res.status(500).json(err);
            } else {
                const fileName = req.file.filename;
                const cardInfo = JSON.parse(req.body.cardInfo);
                const userInfo = JSON.parse(req.body.user);
                try {
                    const card = await insetCardToDb(cardInfo, fileName);
                    insertCardIdToUser(userInfo, card);
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({ card: req.file, status: "updated" });
        });
    },
};
