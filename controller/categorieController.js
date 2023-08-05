const Category = require("../models/CategorySchema");

const addCategorie = async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).send(savedCat);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getCategorie = async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).send(cats);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { addCategorie, getCategorie };
