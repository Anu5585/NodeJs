let fs = require('fs');
// for reading modules from the filesystem
let text  = fs.readFileSync("prtc.txt", "utf8");
//for replacing file content 
text = text.replace("browser " , "Annas");

console.log(text);

// for writing in file 
console.log("creating a new file");
fs.writeFileSync("Annas.txt",text)

