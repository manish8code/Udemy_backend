const express = require('express');
const app = express();

const books = [
  { id: 1, title: "book one", author: "author one" },
  { id: 2, title: "book two", author: "author two" }
];

app.use(express.json()) //middleware given by express to get req as json

app.get('/books',(req,res)=>{
    res.setHeader('x-my-header','maine bheja header') //my custom header   and space in header name
    res.json(books)
})
app.get('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)) res.status(400).json({error:"bad resquest"})
    const book=books.find((e)=>e.id===id)

    if(!book) 
        return res.status(404).json({error:`book with the ${id} is not found`})
    return res.json(book)
})

app.post('/books',(req,res)=>{
    const {title,author}=req.body;
    if(!title || title==='') res.status(400).json({error:"title is required"})
    if(!author || author==='') res.status(400).json({error:"author is required"})

    const id=books.length+1;
    const book={id,title,author};
    books.push(book);
    return res.status(201).json({message:"book created sucess",id})
})

app.delete('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const deleteId=books.findIndex((e)=>e.id===id);
    if(deleteId<0) return res.status(400).json({error:`books with id: ${id} does not exists `})

     books.splice(deleteId,1);
     return res.status(200).json({message:`book with id:${id} is deleted`})   
})
app.listen(8000,()=>{
    console.log("serever running succesfully")
})