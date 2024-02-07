const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let val = "";
for(var i = 1; i <= input; i++){
    val = "";
    for(var j = 1 ; j <= (input-i+1); j++){
        if(j != (input-i+1)){
            val += i + " * " + j + " = " + i*j + " / ";
        }else{
            val += i + " * " + j + " = " + i*j;
        }
    }
    console.log(val);
}