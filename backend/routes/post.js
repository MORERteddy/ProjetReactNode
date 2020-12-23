const express = require("express");
const {getAllPosts, addPost, getPostById, getPostByNote} = require("../controllers/Post")

const router = express.Router();

router.get("/posts", getAllPosts)
router.get("/post/:id", getPostById)
router.post("/post", addPost)
router.get("/", getPostByNote)

module.exports = router;