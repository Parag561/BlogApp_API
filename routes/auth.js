const router = require("express").Router();
const { register, login } = require("../controller/authController");

//to Register a USer
router.post("/register", register);

//to login a USer
router.post("/login", login);

module.exports = router;
