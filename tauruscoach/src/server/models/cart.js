const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    default: 1,
  },
  createTime: {
    type: String,
    default: () => moment().format("LLLL"),
  },
  expireTime: {
    type: String,
    default: "24Hours",
  },
  coupon: {
    type: String,
    default: "add coupons",
  },
});
const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
