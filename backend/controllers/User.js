const User = require ("../models/user");
const express = require("express")
//const _= require("loadash");

const app=express()

const createUser = (req,res) => {
    const {name, email, password} = req.body;
    const newUser = new User({name, email, password})
	newUser.save((err, user) => {
        if (err) res.json({error: err})
        res.json(user)
    })
}

const getUserById = (req, res, next,id)=>{
    User.findById(id).exec((err, user)=>{
        if(err || !user) res.json({error: err})
        req.profile =user;
        next();
    })
}

const getAlltUsers = (req,res) => {
    User.find((err, users) =>{
        if(err || !users) res.json({error: err})
        res.json(users)
    })
}

const getUser = (req,res) => {
    res.json(req.profile)
}

module.exports = {
    createUser,
    getUserById,
    getUser,
    getAlltUsers
}