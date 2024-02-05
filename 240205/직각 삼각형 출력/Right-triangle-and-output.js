const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let val = "";
for(var i = 0; i < input; i++){
    val = "*";
    for(var j = i; j > 0; j--){
        val += "**";
    }
    console.log(val);
}