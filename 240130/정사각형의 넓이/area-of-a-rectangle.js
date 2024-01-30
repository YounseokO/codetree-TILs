const fs = require("fs");

let n = fs.readFileSync(0);
n = Number(n);
if(n >= 5){
    console.log(n*n);
}else{
    console.log(n*n);
    console.log("tiny");
}