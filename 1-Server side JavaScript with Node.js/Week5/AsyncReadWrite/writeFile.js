const fs=require('fs');
fs.writeFile("input1.txt","Hello Sachin",(err)=>{
    if(err){
        return console.log(err);
    }
    console.log('File created successfully');
});