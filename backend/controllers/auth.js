const User = require ("../models/user");
const jwt = require("jsonwebtoken")
const expressJwt = require("express-jwt")

const signin = (req, res) =>{
    User.findOne({email: req.body.email},(err, user) =>{
        if(err || !user) res.json({error: err})
        const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET)
        res.cookie('t', token, {
            expire : new Date() +9999
        })
        return res.json({
            token,
            user : {id: user._id, name : user.name, email : user.password},
        })
    })
}

const signout = (req, res) => {
    res.clearCookie("t");
    res.json({message : "User déconnécté"})
}

module.exports ={
    signin,
    signout,
}