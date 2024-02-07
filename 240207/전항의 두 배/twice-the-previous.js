const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);

let a = Number(input[0]);
let b = Number(input[1]);
let val = 0;
let Arr = new Array();
Arr.push(a,b);

for(var i = 0; i <8; i++){
    val = 0;
    val = Arr[Arr.length-1] + (2*Arr[Arr.length-2]);
    Arr.push(val);
}
val = "";
for(var i = 0; i < Arr.length; i++){
    val += Arr[i] + " ";
}
console.log(val);