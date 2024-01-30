const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = Number(a);
a += 1.5;
console.log(a);