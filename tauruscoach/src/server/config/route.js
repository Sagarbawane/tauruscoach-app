const express = require("express");
const userController = require("../controllers/userController.js");

const { authenticateUser } = require("../middlewares/authenticate");

const router = express.Router();

router.post("/api/user/register", userController.register);
router.post("/api/user/login", userController.login);
router.get("/api/user/account", authenticateUser, userController.account);
router.delete("/api/user/logout", authenticateUser, userController.logout);

module.exports = router;
