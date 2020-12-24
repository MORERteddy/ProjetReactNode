const express = require("express");

const {getAllPosts, addPost, getPostById,getPostByNote,UpdatePost,getImage} = require("../controllers/Post")


const router = express.Router();

router.get("/posts", getAllPosts)
router.get("/post/:id", getPostById)
router.post("/post", addPost)
router.get("/", getPostByNote)
router.post("/post/image",getImage)
router.get("/post/:id", getPostById)
router.patch("/post/:id",UpdatePost)
module.exports = router;