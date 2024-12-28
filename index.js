require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send("hello world");
})

app.get('/twitter',(req,res) => {
    res.send("twitter");
})

app.get('/login',(req,res) =>{
    res.send("<h1>Please Login At Code Sneaker's</h1>");
})
app.get('/sign',(req,res) => {
    res.send("<h1>Please Sign Up At Code Sneaker's</h1>");
})

app.listen(process.env.PORT,() => {
    console.log(`server is running on port ${port}`);
})