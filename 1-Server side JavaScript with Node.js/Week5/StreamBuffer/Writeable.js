const fs=require('fs');

const readableStream=fs.createReadStream('input.txt');

const writeableStream=fs.createWriteStream('input1.txt');

readableStream.setEncoding('utf-8');
readableStream.on('data',function(chunk){
    writeableStream.write(chunk);
})