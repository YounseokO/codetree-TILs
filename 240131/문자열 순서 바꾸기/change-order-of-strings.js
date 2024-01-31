const fs = require("fs");
let input = fs.readFileSync(0).toString();
input = input.split(/\n/);

console.log(input[1] + "\n" + input[0]);