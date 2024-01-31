// line by line execution = synchronus  = blocking 
// line by line execution not guaranteed  callbacks will fire  = Asynchronous = Non blocking

const fs = require('fs');

let  text = fs.readFile("Annas.txt","utf8",(err,data)=>{
    console.log(err,data);
})

console.log("msg");

