const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);
let a = Number(input[0]);
let b = Number(input[1]);

let val = "";

for(var i = 2; i <= 8; i += 2){
    val = "";
    for(var j = b; j >= a; j--){
        if(j != a){
            val += j + " * " + i + " = " + j*i + " / ";
        }else{
            val += j + " * " + i + " = " + j*i;
        }
    }
    console.log(val);
}