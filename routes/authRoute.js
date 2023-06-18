const express = require("express");
const {
  loginController,
  registerController,
  logoutController,
} = require("../controllers/userController");


const router = express.Router();


router.post("/login", loginController);
router.post("/register", registerController);
router.post("/logout", logoutController);

module.exports = router;