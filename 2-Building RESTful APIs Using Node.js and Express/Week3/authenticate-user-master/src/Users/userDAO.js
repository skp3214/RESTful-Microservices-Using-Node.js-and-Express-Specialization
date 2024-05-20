const user=require('./users.json');
const fs=require('fs');


function findUser(email,done){
    const userFetched=user.filter(user=>user.email===email)[0]
    done(undefined,userFetched)
}

function registerUser(userData,done){
    user.push(userData)
    fs.writeFileSync('users.json',JSON.stringify(user))
    done(undefined,userData)
}

module.exports={findUser,registerUser}