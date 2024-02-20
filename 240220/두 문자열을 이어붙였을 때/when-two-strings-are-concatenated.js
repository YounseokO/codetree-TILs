const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\n/);

let A = input[0];
let B = input[1];

let wordAB = A + B;
let wordBA = B + A;

if(wordAB == wordBA){
    console.log("true");
}else{
    console.log("false");
}