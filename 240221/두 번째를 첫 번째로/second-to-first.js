const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let word = input[1];
let words = input[0];
input = input.replaceAll(word, words)

console.log(input);