const express  = require("express");

const app = express();

const cookieParser = require("cookie-parser");

const cors = require("cors")

const authRoute = require("./router/authRoute")

const databaseConnect = require("./config/databaseConfig.js")


databaseConnect();

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api/auth/', authRoute);
app.use('/' ,  (req,res)=>{
    res.status(200).json({data : 'JWTauth server is on '})
})


module.exports = app;