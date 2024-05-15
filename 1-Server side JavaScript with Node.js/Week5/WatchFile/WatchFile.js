const fs=require('fs');
fs.watch("input.txt",(eventType,filename)=>{
    console.log("\n The File ",filename," was modified!");
    console.log("The type of change was: ",eventType);
});

setTimeout(()=>{
    fs.renameSync("input.txt","newFile.txt");
},1000);
setTimeout(()=>{
    fs.renameSync("newFile.txt","input.txt");
},2000);
setTimeout(()=>{
    fs.writeFileSync("input.txt","The file is modified");
},3000);