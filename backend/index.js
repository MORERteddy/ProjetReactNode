const express = require("express")
const Post = require("./models/post")
const User = require("./models/user")
require("dotenv").config()
const mongoose = require("mongoose")
const optionMangoos = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.CONNECTION_URI, optionMangoos)

const app=express()

app.use(express.json())
app.get("/",async(req,res)=>{
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



app.listen(process.env.PORT,()=>{console.log(`serveur lancé http://localhost:${process.env.PORT}`)})