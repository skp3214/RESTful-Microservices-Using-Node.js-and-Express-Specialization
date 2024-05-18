const http = require('http');
const port = 5001;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain" 
    });
    res.end("hello");
});

server.listen(port, () => {
    console.log("Server is ready and running on port 5001");
});
