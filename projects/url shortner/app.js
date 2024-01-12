const fs = require("fs");

const readStream = fs.createReadStream('./blogs.txt');

readStream.on('data',(chunk)=>{  // .on is like event listener 
    console.log("string")
console.log(chunk);
})