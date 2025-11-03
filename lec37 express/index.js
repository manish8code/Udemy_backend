const express =require('express')
const app=express();
app.get('/',(req,res)=>{
    res.end('homepage')
})
app.get('/contact',(req,res)=>{
    res.end('this is contact page')
})
app.get('/tweet',(req,res)=>{
    res.end('get your tweet')
})
app.post('/tweet',(req,res)=>{
    res.end('tweet created sucessfully')
})
app.listen(8000,()=>{
    console.log("server is running well")
})