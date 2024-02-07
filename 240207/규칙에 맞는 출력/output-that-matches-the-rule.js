const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let val = "";
for(var i = input; i >= 1; i--){
    val = ""
    for(var j = i; j <= input; j++){
        val += j + " ";
    }
    console.log(val);
}