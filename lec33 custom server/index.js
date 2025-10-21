const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(`i got a req at ${Date.now()}`)
    //console.log(req.headers)
    console.log(req.url)

    res.writeHead(200)

    switch(req.url){
        case '/':
        res.writeHead(200)
        return res.end("home page")
      
        case '/about':
        res.writeHead(200)
        return res.end("about page")
        
        case '/contact':
        res.writeHead(200)
        return res.end("contact page")
      
        default:
        res.writeHead(404)
        res.end("kya likh rha hai")
    }
    
})
server.listen("8000",()=>{
    console.log("server running succecfully")
})