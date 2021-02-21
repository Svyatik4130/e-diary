const router = require("express").Router()
// const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
// const auth = require("../middleware/auth")
const jwt = require("jsonwebtoken")
// const usersResponsibility = require("../models/usersresposblModel")

router.get("/test", (req, res) => {
    console.log('Hello test')
    res.json("sending data")
})

module.exports = router
