const JWT = require("jsonwebtoken")

const jwtAuth = (req,res,next) =>{
    const token = ( req.cookies && req.cookies.token  ) || null;
    if(!token){
        return res.status(500).json({
            success: false,
            message:"Unauthorised token"
        })

    }
    try{
        const payload = JWT.verify(token , process.env.SECRET);
        req.user  = {id : payload.id, email:payload.email }
    }catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        })
    }
    next();
}

module.exports  = jwtAuth;