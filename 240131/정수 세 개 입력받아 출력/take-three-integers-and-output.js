const fs = require("fs");

let input = fs.readFileSync(0).toString();

input = input.split(/\s/);

console.log(input[0] + " " + input[1] + " " + input[2]);