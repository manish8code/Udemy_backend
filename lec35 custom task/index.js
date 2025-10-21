const http = require('node:http');
const fs =require('node:fs')
const server = http.createServer((req, res) => {
    const path = req.url;
    const method = req.method;

    const log=`\n[${Date.now()}] : ${method} ${path}`
    fs.appendFileSync('log.txt',log,'utf-8')
    if (method === 'GET') {
        if (path === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            return res.end("Hello from the server");
        }

        if (path === '/contact') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            return res.end("Contact page");
        }
         res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end("404 Not Found");
    }
    else if(method=='POST'){
        if(path=='/tweet'){
            res.writeHead(201, { 'Content-Type': 'text/plain' });
            return res.end("tweet is done");
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end("404 Not Found");
    }
});

server.listen(8000, () => {
    console.log("Server started successfully on port 8000");
});
