const http =require('http')

const server=http.createServer((req,res)=>{
    console.log('i got a incoming req');
    //db
    res.writeHead(200);
    res.end("thanks for visiting my server")
});

server.listen(8000,()=>{
    console.log("running succesfully on 8000")
})

//localhost:8000
//local host means my machine and the port number is inside my machine 
//that i have to go to that particular port