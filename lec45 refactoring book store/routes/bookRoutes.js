const express=require('express')
const { BOOKS } = require('../db/books');
const router=express.Router();

router.get('',(req,res)=>{
    res.setHeader('x-my-header','maine bheja header') //my custom header   and space in header name
    res.json(BOOKS)
})

router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)) res.status(400).json({error:"bad resquest"})
    const book=BOOKS.find((e)=>e.id===id)

    if(!book) 
        return res.status(404).json({error:`book with the ${id} is not found`})
    return res.json(book)
})

router.post('',(req,res)=>{
    const {title,author}=req.body;
    if(!title || title==='') return res.status(400).json({error:"title is required"})
    if(!author || author==='') return res.status(400).json({error:"author is required"})

    const id=BOOKS.length+1;
    const book={id,title,author};
    BOOKS.push(book);
    return res.status(201).json({message:"book created sucessfully",id})
})

router.delete('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const deleteId=BOOKS.findIndex((e)=>e.id===id);
    if(deleteId<0) return res.status(400).json({error:`book with id: ${id} does not exists `})

     BOOKS.splice(deleteId,1);
     return res.status(200).json({message:`book with id:${id} is deleted`})   
})

module.exports = router;