// read file
const http = require('http')

const fs = require('fs')

const fileContent = fs.readFileSync('i.html')

//making server

const server = http.createServer ( (req, res)=>{
    res.writeHead(200, { 'Content-type': 'text/html'});

    res.end(fileContent)
})
//making port 
server.listen(80,'127.0.0.1', ()=>{  // port 80 ka faida ye h k hum just 127.0.0.1 likh k access kr skty h agr koi or port lyty to wo mention krni prti port 
    console.log("Listing on port 80"); 
})