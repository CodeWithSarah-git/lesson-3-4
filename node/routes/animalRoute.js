const express = require("express")
const router = express.Router()
const {animal}=require('../data')
const fs=require("fs")
const path = require("path")

router.get("/", (req,res)=>{
animal.map((a)=>{
fs.appendFile(path.join(__dirname,"Animals.txt"),`animal: ${a.name}\n${a.gender}\n${a.id}\n${a.food}\n\n`
,(err)=>{
         if(err) throw err;
            console.log("AppendFile File Complete")
                  })
})
res.send("list of animals was copied to Animals.txt")})
module.exports = router