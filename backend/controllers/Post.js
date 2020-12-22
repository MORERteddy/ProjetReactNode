const express = require("express")
const Post = require("../models/post");
const cors = require('cors')


const corsOptions = {
    origin: "http://localhost:3000",
  }

const app=express()
app.use(cors(corsOptions))
const getAllPosts = app.get("/posts",async(req,res)=>{
	await Post.find()
		.exec()
		.then(document => res.status(200).json(document))
		.catch(err => res.status(500).send())
})

const addPost = app.post("/post",async(req,res)=>{
	console.log(req.body)
    const newPost = new Post(req.body)
	const document = await newPost.save()
	res.status(201).json(document)
})

const getPostById = app.get("/post/:id",async(req,res)=>{
    await Post.findById(req.params.id)
    .exec()
    .then(document => res.status(200).json(document))
    .catch(err => res.status(500).send())
})

const getPostByNote = app.get("/",async(req,res)=>{
	await Post.find().sort({"noteMoyenne" : "desc"}).limit(4)
		.exec()
		.then(document => res.status(200).json(document))
		.catch(err => res.status(500).send())
})

 const UpdatePost = app.patch("/post/:id", async (req, res) => {
 	try {
 		const { id } = req.params
 		const acceptedField = ["voteCount", "comments", "noteMoyenne","titre","body","image"]
 		const keys = Object.keys(req.body).filter(key => acceptedField.includes(key))
 		const fieldsToUpdate = {}
 		keys.map(key => fieldsToUpdate[key] = req.body[key])
 		const doc = await Post.findByIdAndUpdate(id, fieldsToUpdate, {new: true})
 		res.json(doc)
 	} catch {
 		res.status(500).send("Erreur lors de la mise à jour")
 	}
 })

const getSearch = app.get("/search", cors(corsOptions),async(req,res)=>{
	await Search.find()
		.exec()
		.then(document => res.status(200).json(document))
		.catch(err => res.status(500).send())
})

const addSearch = app.post("/searchs",async(req,res)=>{
    const newSearch = new Post(req.body)
	const document = await newSearch.save()
	res.status(201).json(document)
})

module.exports = {
    getAllPosts,
    addPost,
    getPostById,
    getPostByNote,
	UpdatePost,
	getSearch,
    addSearch
}
