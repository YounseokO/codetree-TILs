const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

input = input.split(/\n/);

let val = "";
let sum = 0;
for(var i = 0; i < input.length; i++){
    for(var j = 0; j < i+1; j++){
        val = input[i].split(/\s/);
        sum += Number(val[j]);
    }
}
console.log(sum);