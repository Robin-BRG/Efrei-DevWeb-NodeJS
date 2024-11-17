const express = require("express")
const router = express.Router()
const { getAllUsers, createUser, updateUser, deleteUser } = require("../controllers/usersControllers")


// GET METHOD
router.get("/users", getAllUsers)

// POST METHOD
router.post("/users", createUser)

// PUT METHOD
router.put("/users/:id", updateUser)

// DELETE METHOD
router.delete("/users/:id", deleteUser)

module.exports = router
