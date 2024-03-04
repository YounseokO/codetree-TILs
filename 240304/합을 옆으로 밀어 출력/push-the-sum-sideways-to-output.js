const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\n/);

let word = 0;

for(var i = 1; i < input.length; i++){
    word += Number(input[i]);
}
let a = String(word)[0]
word = String(word).slice(1,) + a;
console.log(word);