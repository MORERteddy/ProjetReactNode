const express = require("express")
const Post = require("./models/post")
const User = require("./models/user")
require("dotenv").config()
const cors = require('cors')
const corsOptions = {
    origin: "http://localhost:3000",
  }
const mongoose = require("mongoose")

const userRoutes = require("./routes/user")
const postRoutes = require("./routes/post")

// connexion à la bdd

const connectToDatabase = async () =>{
	try{
		await mongoose.connect(process.env.CONNECTION_URI, {
			useNewUrlParser: true,
			useUnifiedTopology : true,
			useCreateIndex : true,
			useFindAndModify : false,
		})
		console.log("connected to database")
	}catch (error){
		console.log(error)
	}
}

connectToDatabase();



const app=express()

// Middlewares
app.use(express.json())
app.use(cors(corsOptions))
// routes
app.use("/", userRoutes);
app.use("/", postRoutes);

// app.get("/",async(req,res)=>{
// 	await Post.find()
// 		.exec()
// 		.then(document => res.status(200).json(document))
// 		.catch(err => res.status(500).send())
// })

const port = process.env.PORT



app.listen(port,(err) => {
	if(err) console.log(err);
	console.log(`serveur lancé http://localhost:${port}`)
})
