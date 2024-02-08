const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

input = input.split(/\n/);
input = input[1].split(/\s/);

let temp = 0;
let min = 100;
for(var i = 0; i < (input.length-1); i++){
    for(var j = i+1; j < input.length; j++){
    temp = Math.abs((Number(input[i]) - Number(input[j])));
    if(min > temp){
        min = temp;
    }
    }
}

console.log(min);