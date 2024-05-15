const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', 'utf-8');

readableStream.on('data', function (data) {
    console.log(data);
});

readableStream.on('end', () => {
    console.log('End of file reached!!!');
})