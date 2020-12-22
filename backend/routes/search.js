const express = require("express");
const {getSearch, addSearch} = require("../controllers/Search")

const router = express.Router();
router.get("/search", getSearch)
router.post("/search", addSearch)

module.exports = router;