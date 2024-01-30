const fs = require("fs");

let arr = fs.readFileSync(0).toString();
//let b = fs.readFileSync(0).toString();
a = Number(arr[0]);
b = Number(arr[2]);
console.log(a +" "+ b +" "+ (a+b));