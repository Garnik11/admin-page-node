const express = require("express")

const user_router = express.Router()
const user = require("../controllers/user_controller")

user_router.post("/register", user.user_register)
user_router.post("/login", user.user_login)

module.exports = user_router