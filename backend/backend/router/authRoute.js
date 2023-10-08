const express = require("express");
const { signup ,signin , getUser , logOutUser } = require("../controller/controller.js");
const jwtAuth = require("../middleware/jwtAuth");




const authRoute = express.Router()

authRoute.post('/signup' ,  signup)

authRoute.post('/signin' ,signin)

authRoute.get('/user' ,jwtAuth, getUser)

authRoute.get('/logout' , jwtAuth ,logOutUser)


module.exports = authRoute;