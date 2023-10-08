
const mongoose  = require("mongoose")

const MONGODB_URL = process.env.MONGODB_URL;
toString(MONGODB_URL);


const databaseConnect = () =>{
    try {
        mongoose
    .connect('mongodb+srv://auth2:Adarsh123456@cluster0.poo2vrz.mongodb.net/AssignentHub')
    .then((conn) => console.log(`connected to DB :${conn.connection.host}`))
    .catch( (err)=>{console.log(`error occurred ${err}`);})
    } catch (error) {
        console.log("error occurred");
    }
}

module.exports = databaseConnect;