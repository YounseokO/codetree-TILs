const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);
let a = Number(input[0]);
let b = Number(input[1]);

let sum = "";

while(a >= b){
    if(a%2 == 0){
        sum += a + " ";
    }
    a--;
}

console.log(sum);