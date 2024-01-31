const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);
input.sort((a, b) => a - b);

console.log(input[1]);