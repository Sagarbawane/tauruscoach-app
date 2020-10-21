const Cart = require("../models/cart");

const cartController = {};

cartController.list = (req, res) => {
  Cart.find()
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      res.json(err);
    });
};

cartController.create = (req, res) => {
  const body = req.body;

  const cart = new Cart(body);
  cart.userId = req.userId;
  // assigning the user id to the message

  cart
    .save()
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      res.json(err);
    });
};
cartController.show = (req, res) => {
  const id = req.params.id;
  Cart.findById(id)
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      res.json(err);
    });
};

cartController.update = (req, res) => {
  const id = req.params.id;

  const body = req.body;

  Cart.findByIdAndUpdate({ _id: id, user }, body, {
    new: true,
    runValidators: true,
  }).then((cart) => {
    if (cart) {
      res.json(cart);
    } else {
      res.json({});
    }
  });
};
cartController.destroy = (req, res) => {
  const id = req.params.id;

  Cart.findOneAndDelete({ _id: id, userId: req.userId })
    .then((cart) => {
      if (cart) {
        res.json(cart);
      } else {
        res.json("It is posted by other user ");
      }
    })
    .catch((err) => {
      res.json("It is posted by other user ");
    });
};

module.exports = cartController;
