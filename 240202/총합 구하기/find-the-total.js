const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);

let a = Number(input[0]);
let b = Number(input[1]);

let sum = 0;
for(var i = a; i <= b; i++){
    if((i%6 == 0)&&(i%8 != 0)){
        sum += i;
    }
}
console.log(sum);