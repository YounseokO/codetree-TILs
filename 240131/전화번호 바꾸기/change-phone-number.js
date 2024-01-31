const fs = require("fs");
let input = fs.readFileSync(0).toString();
input = input.split("-");

let text = input[0] + "-" + input[2] + "-" + input[1];

console.log(text);