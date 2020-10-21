const express = require("express");
const userController = require("../controllers/userController.js");
const cartController = require("../controllers/cartController.js");

const { authenticateUser } = require("../middlewares/authenticate");

const router = express.Router();

router.post("/api/user/register", userController.register);
router.post("/api/user/login", userController.login);
router.get("/api/user/account", authenticateUser, userController.account);
router.delete("/api/user/logout", authenticateUser, userController.logout);

router.get("/api/user/cart", authenticateUser, cartController.list);
router.post("/api/user/cart", authenticateUser, cartController.create);
router.get("/api/user/cart/:id", authenticateUser, cartController.show);
router.delete("/api/user/cart/:id", authenticateUser, cartController.destroy);

module.exports = router;
