const express = require("express");
const {getSearch, addSearch} = require("../controllers/Search")

const router = express.Router();
router.get("/serach", getSearch)
router.post("/serach", addSearch)

module.exports = router;