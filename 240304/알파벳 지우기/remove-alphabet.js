const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\n/);

let word1 = input[0].replace(/[^0-9]/g,"");
let word2 = input[1].replace(/[^0-9]/g,"");

console.log(Number(word1) + Number(word2));