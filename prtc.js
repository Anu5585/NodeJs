let fs = require('fs');

let  text = fs.readFileSync("Annas.txt","utf8")
text = text.replace("browser", "Ak2") 
console.log(text);

fs.writeFileSync("AK2","text");

//delete file  file path do : 
// fs.unlinkSync('Annas.txt');

