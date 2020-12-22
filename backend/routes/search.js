const express = require("express");
const {getSearch, addSearch} = require("../controllers/Post")

const router = express.Router();
router.get("/search", getSearch)
router.post("/searchs", addSearch)

module.exports = router;