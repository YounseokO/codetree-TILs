const fs = require("fs");
let input = fs.readFileSync(0);

input = Number(input);
let n = 10;
let sum = 0;
for(var i = n; i <= input; i++){
    sum += i;
}
console.log(sum)