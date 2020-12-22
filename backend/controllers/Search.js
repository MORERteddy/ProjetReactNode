const express = require("express")
const Search = require("../models/search");
const cors = require('cors')

const corsOptions = {
    origin: "http://localhost:3000",
  }

const app=express()

const getSearch = app.get("/serach", cors(corsOptions),async(req,res)=>{
	await Search.find()
		.exec()
		.then(document => res.status(200).json(document))
		.catch(err => res.status(500).send())
})

const addSearch = app.post("/serach",async(req,res)=>{
    const newSearch = new Search(req.body)
	const document = await newSearch.save()
	res.status(201).json(document)
})

module.exports = {
    getSearch,
    addSearch
}
