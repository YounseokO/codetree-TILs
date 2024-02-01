const fs = require("fs");

let input = fs.readFileSync(0).toString();
input = input.split(/\s/);

let a = Number(input[0]);
let b = Number(input[1]);

let sum = "";
for(var i = a; i <= b; i++){
    if(i%2 == 1){
        sum += i + " ";
    }
}
console.log(sum);