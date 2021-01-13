const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
    default: "",
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    default: "",
  },
  password: {
    type: String,
    required: true,
    unique: true,
    default: "",
  },
  isDeleted: {
    type: Boolean,
    required: true,
    unique: true,
    default: false,
  },
});

UserSchema.methods.generateHash = function (password) {
  //bcrypt is a library
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
