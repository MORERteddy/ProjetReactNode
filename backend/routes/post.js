const express = require("express");
<<<<<<< HEAD
const {getAllPosts, addPost, getPostById, getPostByNote} = require("../controllers/Post")
=======
const {getAllPosts, addPost, getPostById,getPostByNote,UpdatePost,getImage} = require("../controllers/Post")
>>>>>>> e5fb2d5a1779d2827d29730ae3fe1d6779d18b67

const router = express.Router();

router.get("/posts", getAllPosts)
router.get("/post/:id", getPostById)
router.post("/post", addPost)
router.get("/", getPostByNote)
router.post("/post/image",getImage)


module.exports = router;