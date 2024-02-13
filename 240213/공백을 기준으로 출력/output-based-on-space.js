const fs = require("fs");

let a = fs.readFileSync(0).toString().trim().split(/\n/);

let b = a[0] + a[1];

b = b.replace(/\s/g,"");

console.log(b);