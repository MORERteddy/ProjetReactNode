const User = require ("../models/user");
const express = require("express")
// const _= require("loadash");
const app=express()

const createUser = app.post("/User",async(req,res)=>{
    const newUser = new User(req.body)
	const document = await newUser.save()
	res.status(201).json(document)
})

const getUserById = (req, res, id)=>{
    User.findById(id).exec((err, user)=>{
        if(err || !user) res.json({error: err})
        req.profile =user;
        next();
    })
}

const getUser = app.get("/User",async(req,res)=>{
	await User.find()
		.exec()
		.then(document => res.status(200).json(document))
		.catch(err => res.status(500).send())
})

module.exports = {
    createUser,
    getUserById,
    getUser,
}