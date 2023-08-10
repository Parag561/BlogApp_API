const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedpass = await bcrypt.hash(req.body.password, salt);
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedpass,
    });
    let result = await user.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    !user && res.send({ result: "Wrong credentials" });

    const validate =  await bcrypt.compare(req.body.password, user.password);
    !validate && res.send({ result: "Wrong credentials" });
    const { password, ...others } = user._doc;

    res.status(200).send(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { register, login };
