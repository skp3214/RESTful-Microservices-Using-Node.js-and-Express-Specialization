var express=require('express');
var app=express()

const users=[
    {
        "username":"john",
        "userId":101
    },
    {
        "username":"sachin",
        "userId":102
    },
    {
        "username":"sameer",
        "userId":103
    },
    {
        "username":"shruti",
        "userId":104
    },
]

app.get('/users/:userId',(req,res)=>{
    const userData=users.find(u=>u.userId===parseInt(req.params.userId));
    if(userData){
        res.status(200).send(userData);
    }
    else{
        res.status(404).send("The request with given id is not found")
    }
})



app.listen(3000,()=>{
    console.log("Running a localhost 3000")
})