const User = require ("../models/user");
const express = require("express")
const argon2 = require("argon2")
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

const getUserLogin = (req, res,Email)=>{

        console.log(Email)
        console.log(req)
        const user = User.findOne({email:Email})
        console.log(user)



        



        }
        

// const getUserByEmail = (req, res, next,Email)=>{
//     User.findOne({email: req.email},(err, user) =>{
//         if(err || !user) res.json({error: err})
//         const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET)
//         res.cookie('t', token, {
//             expire : new Date() +9999
//         })
//         return res.json({
//             token,
//             user : {id: user._id, name : user.name, email : user.password},
//         })
//     })

// }

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
    getAlltUsers,
    getUserLogin
}


