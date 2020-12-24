const express = require("express");
<<<<<<< HEAD
const {getAllPosts, addPost, getPostById,getPostByNote,UpdatePost,getImage} = require("../controllers/Post")
=======

const {getAllPosts, addPost, getPostById,getPostByNote,UpdatePost,getImage} = require("../controllers/Post")

>>>>>>> ecf7031c6835c3eb1cb4ec0593a43fad4682dac8

const router = express.Router();

router.get("/posts", getAllPosts)
router.get("/post/:id", getPostById)
router.post("/post", addPost)
router.get("/", getPostByNote)
router.post("/post/image",getImage)
router.get("/post/:id", getPostById)
router.patch("/post/:id",UpdatePost)
module.exports = router;