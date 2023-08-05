const router = require("express").Router();
const {
  addPost,
  editPost,
  deletePost,
  getSinglePost,
  getPost,
} = require("../controller/postController");

//to add a Post
router.post("/", addPost);

//to edit a Post
router.put("/:id", editPost);

//to delete a Post
router.delete("/:id", deletePost);

//to get a singlePost
router.get("/:id", getSinglePost);

//to get a Posts
router.get("/", getPost);

module.exports = router;
