const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
//const expressJwt = require('express-jwt')

const Post = require("./models/post")
const User = require("./models/user")


require("dotenv").config()
const app=express()

const corsOptions = {
    origin: "http://localhost:3000",
  }

app.use(express.json())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :true}))
app.use(cookieParser())

const userRoutes = require("./routes/user")
const postRoutes = require("./routes/post")
const searchRoutes = require("./routes/search")
app.use("/", userRoutes);
app.use("/", postRoutes);
app.use("/", searchRoutes);
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

const optionMangoos = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(process.env.CONNECTION_URI, optionMangoos)



const port = process.env.PORT

app.listen(port,(err) => {
	if(err) console.log(err);
	console.log(`serveur lancé http://localhost:${port}`)
})
