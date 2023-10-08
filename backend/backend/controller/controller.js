const userModel = require("../model/userSchema.js");

const emailValidator = require("email-validation")

const bcrypt = require("bcrypt")


const signup = async (req,res,next) =>{
        const {name,username,email,password,confirmPassword} = req.body;
        console.log(name,email,password,confirmPassword);

        if(!name || !username || ! email || !password || ! confirmPassword ){
            return res.status(500).json({
                success:false,
                message:"Pls enter all the details"
            })
        }

        const validEmail = emailValidator.valid(email);
        if(!validEmail){
            return res.status(500).json({
                message:"enter valid email"
            })
        }
        if(password != confirmPassword){
            return res.json({
                message : "  password and confirm password are not same ",
            })
            
        }

        try{
            const userInfo = userModel(req.body)

            const result = await userInfo.save();

            return res.status(200).json({
            success : true,
            data: result
        })
        }
        catch(err){
            if(err.code === 11000){
                return res.status(500).json({
                    success :false,
                    message : 'Account already exist with provided credentials'
                })
            }

            return res.status(500).json({
                success :false,
                message : "fuckOff"
            })

        }
}

const signin = async(req,res,next) =>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(500).json({
            success:false,
            message:"Pls enter email and password"
        })
    }

    try{

        const user = await userModel
    .findOne({email})
    .select('+password')
    if(!user || !(await bcrypt.compare(password,user.password) )){
        return res.status(500).json({
            success:false,
            message:"Invalid Credentials"
        })
    }

    const token = user.jwtToken();
    user.password =  undefined;

    const cookieOption = {
        maxAge:24*60*60*1000,
        httpOnly:true
    }

    res.cookie("token",token,cookieOption);
    res.status(200).json({
        success:true,
        data:user,
    })
    }
    catch(err){
        res.status(500).json({
            success:'falsee',
            message: err.message
        })
    }
    

}

const getUser = async (req,res,next) =>{
    // const name = req.users.name;

    try{
        const user = await userModel.find();
        return res.status(200).json({
            success:true,
            data: user
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}

const logOutUser =  (req,res,next) =>{
    try{
        const cookieOption  = {
            expires : new Date(),
            httpOnly:true
        }
        res.cookie("token", null, cookieOption);
        res.status(200).json({
            success:true,
            message :"loggedOut"
        })

    }
    catch(err){
        res.status(500).json({
            success:true,
            message : err.message
        })

    }
}
module.exports = {
    signup,signin , getUser, logOutUser
}
