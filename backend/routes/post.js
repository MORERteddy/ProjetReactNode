const express = require("express");
const {getAllPosts, addPost, getPostById,getPostByNote,UpdatePost} = require("../controllers/Post")

const router = express.Router();
router.get("/posts", getAllPosts)
router.post("/post", addPost)
router.get("/", getPostByNote)

module.exports = router;