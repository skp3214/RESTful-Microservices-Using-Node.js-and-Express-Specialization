const fs = require('fs');
try {
    const data = fs.writeFileSync("input.txt", "Hello World");
    console.log(data);
}
catch (err) {
    console.log(err);
}