const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);
var sum = 0;
var avr = 0;
for(var i = 0; i < input.length; i++){
    sum += Number(input[i]);
}
avr = (sum/input.length);
console.log(sum);
console.log(avr);
console.log(sum - avr);