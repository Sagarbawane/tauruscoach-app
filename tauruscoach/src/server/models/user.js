const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");
const isAlpha = require("validator/lib/isAlpha");
const isAlphanumeric = require("validator/lib/isAlphanumeric");
const isEmail = require("validator/lib/isEmail");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "FirstName Is Required"],
    validate: {
      validator: function (value) {
        return validator.isAlpha(value, ["en-US"]);
      },
      message: function () {
        return "invalide First Name";
      },
    },
  },
  lastName: {
    type: String,
    required: [true, "LastName Is Required"],
    validate: {
      validator: function (value) {
        return validator.isAlpha(value, ["en-US"]);
      },
      message: function () {
        return "invalide Last Name";
      },
    },
  },
  email: {
    type: String,
    required: [true, "Email Is Required"],
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: function () {
        return "invalide Last Name";
      },
    },
  },
  userName: {
    type: String,
    required: [true, "UserName Is Required"],
    unique: true,
    sparse: true,
    validate: {
      validator: function (value) {
        return validator.isAlphanumeric(value, ["en-US"]);
      },
      message: function () {
        return "invalide  userName";
      },
    },
  },
  password: {
    type: String,
    required: [true, "Password Is Required"],
    minlength: 8,
    maxlength: 120,
    // validate: {
    //   validator: function (value) {
    //     return validator.trim() && validator.isAlphanumeric(value, ["en-US"]);
    //   },
    //   message: function () {
    //     return "invalide Last Name";
    //   },
    // },
  },
  confirmPassword: {
    type: String,
    required: [true, "Password Is Required"],
    minlength: 8,
    maxlength: 120,
    // validate: {
    //   validator: function (value) {
    //     return validator.trim() && validator.isAlphanumeric(value, ["en-US"]);
    //   },
    //   message: function () {
    //     return "invalide Last Name";
    //   },
    // },
  },
  privacy: {
    type: Boolean,
  },
  coupons: {
    type: Boolean,
  },
});

userSchema.plugin(uniqueValidator);

userSchema.pre("save", function (next) {
  const user = this;
  bcryptjs.genSalt().then((salt) => {
    bcryptjs.hash(user.password, salt).then((encryptpassword) => {
      user.password = encryptpassword;
      next();
    });
  });
});
const User = mongoose.model("user", userSchema);

module.exports = User;
