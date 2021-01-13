const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new mongoose.Schema({
  username: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  img: {
    data: Buffer,
    contentType: "String",
  },
});

const Cards = mongoose.model("Cards", cardSchema);

module.exports = Cards;
