const express = require("express")
const Post = require("./models/post")
const User = require("./models/user")
require("dotenv").config()
const mongoose = require("mongoose")
const optionMangoos = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.CONNECTION_URI, optionMangoos)

const app=express()

app.use(express.json())
app.get("/Post",async(req,res)=>{
	await Post.find()
		.exec()
		.then(document => res.status(200).json(document))
		.catch(err => res.status(500).send())
})



app.post("/Post",async(req,res)=>{
    const newPost = new Post(req.body)
	const document = await newPost.save()
	res.status(201).json(document)
})

app.get("/Post/:id",async(req,res)=>{
    await Post.findById(req.params.id)
    .exec()
    .then(document => res.status(200).json(document))
    .catch(err => res.status(500).send())
})

 app.patch("/Post/:id", async (req, res) => {
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
app.get("/User",async(req,res)=>{
	await User.find()
		.exec()
		.then(document => res.status(200).json(document))
		.catch(err => res.status(500).send())
})

app.post("/User",async(req,res)=>{
    const newUser = new User(req.body)
	const document = await newUser.save()
	res.status(201).json(document)
})


app.listen(process.env.PORT,()=>{console.log(`serveur lancé http://localhost:${process.env.PORT}`)})