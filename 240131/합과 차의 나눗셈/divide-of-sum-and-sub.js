const fs = require("fs");
let input = fs.readFileSync(0).toString();
input = input.split(/\s/); // a,b 로 나옴
let a = Number(input[0]);
let b = Number(input[1]);
let value = (a + b)/(a - b);
value = value.toFixed(2);
console.log(value);