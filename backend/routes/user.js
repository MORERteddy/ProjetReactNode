const express = require("express");
const {createUser, getUserById,getUser,getAlltUsers} = require("../controllers/User")
const {signin, signout} = require("../controllers/auth")


const router = express.Router();

router.post("/users/create", createUser);
router.get("/user/:userId", getUser);
router.get("/users", getAlltUsers);
router.post("/auth/signin", signin);
router.get("/auth/signout", signout);


router.param("userId", getUserById);

module.exports = router;