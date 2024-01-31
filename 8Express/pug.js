// import express module
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express(); //app initialize
const port = 80; //knsi port py run krni h

// for statistics  serving static files
app.use("/static", express.static("static")); //idr sy agla topic h static wala  //localhost/static/index.js esy search kry  k dekhy gy
// set the template engine as pug
app.set("view engine", "pug");

// set the views directory
app.set("views", path.join(__dirname, "views"));

//for form submition
app.use(express.urlencoded({ extended: true }));

// our pug  endpoints

app.get("/", (req, res) => {
  const con = "Best content";
  const params = { title: "Learning is the best excercise", content: con };
  res.status(200).render("index.pug", params);
});

app.post("/", (req, res) => {
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;
let outputToWrite = `The name of client is ${name},${age} years old,${gender} ,${address} ,${more}`;
  fs.writeFileSync('output.txt',outputToWrite)
  const params = { message: "form submitted successfully" };
  res.status(200).render("index.pug", params);
});
//start the server
app.listen(port, () => {
  console.log(`The App is started sucessfully on port ${port}`);
});
