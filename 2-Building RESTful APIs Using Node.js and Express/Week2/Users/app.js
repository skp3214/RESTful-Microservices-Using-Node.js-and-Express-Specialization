const express=require('express');
const app=express();
const config=require('./config');
const userRouter=require('./userRouter');

const LoggerMiddleware=(req,res,next)=>{
    console.log(`Logged ${req.url} ${req.method}`);
    next();

}

app.use(LoggerMiddleware)
app.use(express.json())
app.use('/api/v1/users',userRouter)
app.use((req,res,next)=>{
    res.status(400).send("Resources not found")
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})