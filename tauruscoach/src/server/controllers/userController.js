const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const userController = {};

userController.register = (req, res) => {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json("something went wrong");
    });
};

userController.login = (req, res) => {
  const body = req.body;
  console.log(body.userName);
  User.findOne({ userName: body.userName })

    .then((user) => {
      console.log(user);
      if (user) {
        console.log(body.password);
        console.log(user.password);
        bcryptjs.compare(body.password, user.password).then((result) => {
          console.log(result);
          if (result) {
            const tokenData = {
              id: user._id,
            };
            const token = jwt.sign(tokenData, "taurusCoach", {
              expiresIn: "1d",
            });
            res.json({
              token: token,
            });
            console.log(token);
          } else {
            res.json({ errors: "Invalid UserName Or Password" });
          }
        });
      } else {
        res.json({ errors: "Invali UserName Or Password" });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};
userController.account = (req, res) => {
  const id = req.userId;
  User.findById(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};
userController.logout = (req, res) => {
  console.log(req);
  const { user, token } = req;
  User.findByIdAndUpdate(req.userId, { $pull: { tokens: { token: token } } })
    .then(function () {
      res.send({ notice: "successfully logged out" });
    })
    .catch(function (err) {
      res.send(err);
    });
};

module.exports = userController;
