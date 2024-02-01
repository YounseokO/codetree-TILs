const fs = require("fs");

let input = fs.readFileSync(0).toString();
input = input.split(/\s/);

let a = Number(input[1]);
let b = Number(input[0]);

let sum = "";
for(var i = b; i >= a; i--){
    if(i%2 == 1){
        sum += i + " ";
    }
}
console.log(sum);