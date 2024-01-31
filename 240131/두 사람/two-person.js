const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\n/);

let A = input[0].split(/\s/);
let B = input[1].split(/\s/);

if((A[0]>19)&&(A[1] == "M")){
    console.log(1);
}else if((B[0]>19)&&(B[1] == "M")){
    console.log(1);
}else{
    console.log(0);
}