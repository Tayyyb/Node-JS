require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("learning the backend!");
});

app.get("/twitter",(req,res)=>{
    res.send("Welcome to the learning backend")
});
app.get('/login',(req,res)=>{
    res.send("<b>Please work  hard to learn the <br/> backend<b/>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
