const Post = require("../models/PostSchema");

const addPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).send(savedPost);
  } catch (err) {
    res.status(500).send(err);
  }
};

const editPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.name === req.body.name) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.send(updatePost);
      } catch (err) {
        res.status(500).send(err);
      }
    } else {
      res.send("You can update only your post!");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.name === req.body.name) {
      try {
        await post.deleteOne();
        res.status(200).send("Post has been deleted...");
      } catch (err) {
        res.status(500).send(err);
      }
    } else {
      res.send("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getPost = async (req, res) => {
  const name = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (name) {
      posts = await Post.find({ name });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { addPost, editPost, deletePost, getSinglePost, getPost };
