const fs = require("fs");

let input = fs.readFileSync(0);

input = input * 2 + 3;
console.log(input);