const User = require("../models/UserSchema");
const Post = require("../models/PostSchema");
const bcrypt = require("bcrypt");

const UpdateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).send(updateUser);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.send("you can update only your account!");
  }
};

const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.params.id);
    try {
      await Post.deleteMany({ name: user.name });
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send("user has been Deleted");
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.send("you can delete only your account!");
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).send(others);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { UpdateUser, deleteUser, getUser };
