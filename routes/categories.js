const router = require("express").Router();
const {
  addCategorie,
  getCategorie,
} = require("../controller/categorieController");

//to add a Categorie
router.post("/", addCategorie);

//to get a Categorie
router.get("/", getCategorie);

module.exports = router;
