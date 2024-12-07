const express = require("express")
const router = express.Router()
const {book}=require('../data')
const fs=require("fs")
const path = require("path")

router.get("/", (req,res)=>{
    book.map((b)=>{
    fs.appendFile(path.join(__dirname,"Books.txt"),`book: ${b.title}\n${b.auther}\n${b.id}\n${b.numOfPages}\n\n`
    ,(err)=>{
             if(err) throw err;
                console.log("AppendFile File Complete")
                      })
    })
    res.send("list of books was copied to Books.txt")})
    module.exports = router