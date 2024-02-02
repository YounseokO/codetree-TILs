const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\n/);

let cen = Number(input[0]);
let Arr = new Array();
for(var i = 0; i < cen; i++){
    Arr.push(Number(input[i+2]));
}

for(var j = 0; j < Arr.length; j++){
    if((Arr[j]%3 == 0)&&(Arr[j]%2 == 1)){
        console.log(Arr[j]);
    }
}