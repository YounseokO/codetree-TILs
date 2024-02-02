const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);

let a = Number(input[0]);
let b = Number(input[1]);

let val = "";
if(a > 0){
    for(var i = 0; i < b; i++){
        val += a + "";
    }
    console.log(val);
}else{
    console.log(0);
}