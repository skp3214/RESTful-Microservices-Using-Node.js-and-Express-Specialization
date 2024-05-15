const event=require('events');
const eventEmitter=new event();

eventEmitter.on('developer',()=>{
    console.log("Hello Developer");
})

eventEmitter.emit('developer');