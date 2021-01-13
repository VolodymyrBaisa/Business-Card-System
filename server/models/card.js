const mongoose = require("mongoose");
const cardSchema = mongoose.Schema;

const cardSchema = new mongoose.Schema({
  cardTag: { type: String, required: true },
  cardTags: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: Date, default: Date.now },
  img: {
    data: Buffer,
    contentType: "String",
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
