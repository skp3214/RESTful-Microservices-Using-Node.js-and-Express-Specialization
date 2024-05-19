const fs = require('fs');
const getUsers = function (done) {
    fs.readFile('2-Building RESTful APIs Using Node.js and Express\\Week2\\Users\\users.json', (err, fileContent) => {
        if (err) {
            return done("Encountered Error")
        }
        let userData = JSON.parse(fileContent)
        return done(undefined, userData)
    })
}

const getUserById = function (userId, done) {
    fs.readFile('2-Building RESTful APIs Using Node.js and Express\\Week2\\Users\\users.json', (err, fileContent) => {
        if(err){
            return done("Error");
        }
        let userData=JSON.parse(fileContent);
        const fetchedUser=userData.find(usr=>usr.userId===parseInt(userId));
        if(fetchedUser===undefined){
            return done("No user found")
        }
        return done(undefined,fetchedUser)
    })
}

const updateUserDetails=function(userId,userName,done){
    fs.readFile('2-Building RESTful APIs Using Node.js and Express\\Week2\\Users\\users.json', (err, fileContent) => {
        if(err){
            return done("Error");
        }
        let userData=JSON.parse(fileContent);
        let index=userData.findIndex(usr=>usr.userId===parseInt(userId))
        if(index==-1){
            return done('No User found')
        }
        console.log(userData)
        console.log(index)
        console.log(userData[index])
        userData[index].username=userName;
        fs.writeFile('2-Building RESTful APIs Using Node.js and Express\\Week2\\Users\\users.json',JSON.stringify(userData),(err,updatedContent)=>{
            if(err){
    
                return done("error occuurred");
            }
        })
        return done(undefined,"Successfully updated user details method")
    })
}
module.exports = { getUsers,getUserById ,updateUserDetails}