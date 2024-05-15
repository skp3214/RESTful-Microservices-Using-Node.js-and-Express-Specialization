const fs = require('fs');
const readline = require('readline');
const writeStream = fs.createWriteStream("outputFile.txt");
const file = readline.createInterface({
    input: fs.createReadStream('input1.txt'),
})
let finalData = [];
file.on('line', (line) => {
    const myArray = line.split(".");
    for (const element of myArray) {
        const data = (element.substring(0, 1).toUpperCase()).concat((element.toString(1).toLowerCase()))
        finalData.push(data);
    }
    writeStream.write(finalData.toString()+"\n");
    finalData=[];
})