const jwt=require('jsonwebtoken');
const config=require('../../config');
function verifyUser({email,password},userData){
    if(email===userData.email && password===userData.password)
        return true;
}

function createJWT(userData){
    const payload={
        role:"USER",
        email:userData.email,
        name:userData.name
    }

    const token=jwt.sign(payload,config.Auth_Secret,{
        expiresIn:3600,
    })
    return token;
}

module.exports={verifyUser,createJWT}