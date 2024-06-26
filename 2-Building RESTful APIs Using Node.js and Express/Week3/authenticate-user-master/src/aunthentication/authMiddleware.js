const jwt=require('jsonwebtoken');
const config=require('../../config');
const verifyToken=(req,res,next)=>{
    const token=req.headers["auth_token"];
    if(!token){
        return res.status(403).send("A token is required for authentication");
    }

    try{
        const decoded=jwt.verify(token,config.Auth_Secret);
        req.claims=decoded;
    }
    catch(err){
        return res.status(401).send("Invalid Token")
    }

    return next()
}

module.exports=verifyToken;