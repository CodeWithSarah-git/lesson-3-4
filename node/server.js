 const express = require("express")
const app = express()
const {book}=require('./data')
const {animal}=require('./data')

const PORT = process.env.PORT || 1234
app.use(express.json())
app.use("/api/books", require("./routes/bookRoute"))
app.use("/api/animals", require("./routes/animalRoute"))
app.post('/A', (req, res) => { res.json(req.body) })





app.listen(PORT, () => { console.log(`ran with port ${PORT}`)})