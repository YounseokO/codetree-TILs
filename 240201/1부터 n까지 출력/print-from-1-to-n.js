const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let sum = "";
for(var i = 1; i <= input; i++){
    sum += (i + " ");
}
console.log(sum);