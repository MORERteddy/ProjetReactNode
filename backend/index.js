const express = require("express")

require("dotenv").config()
const mongoose = require("mongoose")
const optionMangoos = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.CONNECTION_URI, optionMangoos)

const app=express()

console.log()

app.get("/",(req,res)=>{})

app.listen(process.env.PORT,()=>{console.log(`serveur lancé http://localhost:${process.env.PORT}`)})