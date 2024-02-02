const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);

let a = Number(input[0]);
let n = Number(input[1]);
for(var i = 0; i < n; i++){
    a += n;
    console.log(a);
}