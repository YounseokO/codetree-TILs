const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);

let A = Number(input[0]);
let B = Number(input[2]);
let N = input[1];

let val = 0;

if(A == 10){
    //10진수 -> N진수
    N = Number(N);
    val = N.toString(B);
    console.log(val);
}else if(B == 10){
    //N진수 -> 10진수
    val = parseInt(N , A);
    console.log(val)
}else{
    //N진수 -> N진수
    val = parseInt(N , A).toString(B);
    console.log(val)
}