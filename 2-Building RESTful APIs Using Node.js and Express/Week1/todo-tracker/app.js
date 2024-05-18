const http = require('http');
const port = 5001;
const todos=require('./todoj');
let getRequestData=require('./utils');
const server = http.createServer(async(req, res) => {
    if(req.url==='/api/v1/todos' && req.method==='GET'){
        res.writeHead(200,{
            "Content-Type":"application/json"
        })
        res.end(JSON.stringify(todos));
    }
    else if(req.url==='/api/v1/todos'&& req.method==='POST'){
        let req_body=await getRequestData(req);
        
        todos.push(JSON.parse(req_body));
        res.writeHead(200,{
            "Content-Type":"application/json"
        })
        console.log(req.body);
        res.end(req_body);
    }
    else if(req.url.match(/\/api\/v1\/todos\/([0-9])/)&& req.method==="DELETE"){
        let id=req.url.split("/")[4];
        const todo=todos.find(t=>t.id===parseInt(id))
        if(!todo){
            res.writeHead(404,{
                "Content-Type":"application/json"
            })
            res.end('No todo with the specified id')
        }
        else{
            const index=todos.indexOf(todo);
            todos.splice(index,1);
            res.writeHead(200,{
                "Content-Type":"application/json"
            })
            res.end("Deleted the specified todo")
        }
    }
});

server.listen(port, () => {
    console.log("Server is ready and running on port 5001");
});
