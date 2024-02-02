const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/)

let a = Number(input[0]);
let b = Number(input[1]);

let cal = 1;
for(var i = 1; i <= b; i++){
    if(i%a == 0){
        cal *= i;
    }
}
console.log(cal);