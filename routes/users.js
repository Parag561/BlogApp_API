const router = require("express").Router();

const {
  UpdateUser,
  deleteUser,
  getUser,
} = require("../controller/userController");

//to edit a USer
router.put("/:id", UpdateUser);

//to delete a USer
router.delete("/:id", deleteUser);

//to get a USer
router.get("/:id", getUser);

module.exports = router;
