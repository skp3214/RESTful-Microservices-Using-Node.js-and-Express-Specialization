const buffer1=Buffer.alloc(100);
buffer1.write('Hello Sachin');

const output=buffer1.toString('utf-8');
console.log(output);

console.log(Buffer.isBuffer(buffer1));

console.log(buffer1.length);

const bufferSrc=Buffer.from('Hello');
const bufferDest=Buffer.alloc(5);
bufferSrc.copy(bufferDest);

const data=bufferDest.toString('utf-8');
console.log(data);