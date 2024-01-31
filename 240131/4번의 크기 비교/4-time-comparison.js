const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\n/);
let a = Number(input[0]);
let Arr = input[1].split(/\s/);

for(var i = 0; i < Arr.length; i++){
    if(a > Arr[i]){
        console.log(1);
    }else{
        console.log(0);
    }
}