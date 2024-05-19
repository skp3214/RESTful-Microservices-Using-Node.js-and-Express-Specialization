const express=require('express');
const cors=require('cors');
const app=express();

var corsOptions={
    origin:"http://localhost:3000"
};

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.json({message:"Welcome to Node.js with MySQL integration application"})
})

require('./product.routes')(app);

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})