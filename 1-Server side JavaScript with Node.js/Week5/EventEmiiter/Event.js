const events=require('events');
const fs=require('fs');
const eventEmitter=new events.EventEmitter();
eventEmitter.addListener('updateResult',()=>{
    console.log("When updateResult event gets invoke call this function.")
});
fs.readFile('input.txt',"utf-8",(err,data)=>{
    eventEmitter.emit('updateResult');
    console.log(data);
})