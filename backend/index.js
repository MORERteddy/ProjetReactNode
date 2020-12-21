const express = require("express")
const port = 4000
const app=express()

app.get("/",(req,res)=>{})

app.listen(port,()=>{console.log(`serveur lancé http://localhost:${port}`)})