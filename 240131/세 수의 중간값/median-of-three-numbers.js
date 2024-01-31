const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);
let a = input[0];
let b = input[1];
let c = input[2];
if((a < b < c)){
    console.log(1);
}else{
    console.log(0);
}
/*
if((b > a)&&(b < c)){
    console.log(1);
}else{
    console.log(0);
}
*/