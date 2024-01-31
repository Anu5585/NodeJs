// import express module
const express = require('express');
const path = require('path');
const app = express(); //app initialize
const port =80; //knsi port py run krni h 
// for statistics  serving static files 
app.use('/static', express.static('static')) //idr sy agla topic h static wala  //localhost/static/index.js esy search kry  k dekhy gy
// set the template engine as pug
app.set('view engine', 'pug')

// set the views directory 
app.set('views',path.join(__dirname,'views'))
app.get("/demo",(req,res)=>{ 
    res.render('demo', { title: 'Hey', message: 'Hello there!' })

});
// our pug demo endpoint 

// app.get("/",(req,res)=>{ 
// res.send("This is home page of my first express app")

// });

// agr hm status send krna chatay h to wo esy hoga 
app.get("/",(req,res)=>{ 
res.status(200).send("This is home page of my first express app")

});

app.get("/about",(req,res)=>{
res.send("This is about page my first express app")

});
app.post("/about",(req,res)=>{
res.send("This is  post req about page my first express app")

});

app.listen(port,()=>{
    console.log(`The App is started sucessfully on port ${port}`);
})