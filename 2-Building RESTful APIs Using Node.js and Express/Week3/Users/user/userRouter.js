const express = require('express');
const routes = express.Router();

const userController = require('./userController');

routes.get('/', (req, res) => {
    try {
        const userData=req.claims;
        console.log(userData);
        if(!userData.email){
            return res.status(400).send('user emails not available')
        }
        userController.findUser(userData.email,(err,results)=>{
            if(err){
                res.status(400).send("error getting the user.")
            }
            else{
                res.status(200).send(results);
            }
        })
    }
    catch (err) {
        return res.status(500).send("try after some times")
    }
})

module.exports = routes;