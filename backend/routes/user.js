const express = require("express");
const {createUser, getUserById, getUser} = require("../controllers/User")

const router = express.Router();

router.post("/users/create", createUser);
//router.get("/user/:userId", getUser);
router.get("/User", getUser);

router.param("userId", getUserById);

module.exports = router;