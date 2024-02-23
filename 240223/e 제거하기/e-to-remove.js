const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

input = input.replace("e","");
console.log(input);