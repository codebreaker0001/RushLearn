
const mongoose = require("mongoose")

const JWT = require("jsonwebtoken")

const bcrypt = require('bcrypt');


const userSchema =  mongoose.Schema({
    name :{
        type :String,
        required :[true , 'Name is Required'],
        minLength : [5,'name must be greater than 5 character'],
        trim :true

    },
    username:{
        type :String,
        required :[true , 'Name is Required'],
        minLength : [5,'name must be greater than 5 character'],
        trim :true
    },
    email:{
        type : String,

        required:[true, 'email is required'],
        unique: [true, 'Already registered'],
        lowercase:true,
        
        
    },

    password :{
        type: String,
        select : false
    }

    ,
    forgotPasswordToken :{
        type: String
    },
    forgotPasswordExpiryDate:{
        type: Date,
    }

},{
    // timestamp:true,
})
userSchema.methods = {
    jwtToken(){
        return JWT.sign({
            id :this._id,
            email: this.email
            
        },
        process.env.SECRET,
        {expiresIn:'24h'})
    }
}

userSchema.pre('save',async function(){
    if(!this.isModified('password')){
        

    }
    this.password = await bcrypt.hash(this.password,10)
    
})

const userModel = mongoose.model('user' , userSchema)

module.exports = userModel;