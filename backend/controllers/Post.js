const express = require("express")
const Post = require("../models/post");
const fs = require('fs')

const app=express()

const getAllPosts = async(req,res)=>{
	await Post.find()
		.exec()
		.then(document => res.status(200).json(document))
		.catch(err => res.status(500).send())
}

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
	await Post.find().sort({"noteMoyenne" : "desc"}).limit(5)
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

const getSearch = app.get("/search",async(req,res)=>{
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

<<<<<<< HEAD

=======
const getImage = (req,res)=>{
	console.log(req)
	console.log(req.body)
	fs.writeFile("./image2", req.body.file,function (err,data) {
		if (err) {
		  return console.log(err)
		}
		console.log(data)
	  })
}
>>>>>>> e5fb2d5a1779d2827d29730ae3fe1d6779d18b67

module.exports = {
    getAllPosts,
    addPost,
    getPostById,
    getPostByNote,
	UpdatePost,
	getSearch,
	addSearch,
<<<<<<< HEAD
=======
	getImage
	
>>>>>>> e5fb2d5a1779d2827d29730ae3fe1d6779d18b67
}
