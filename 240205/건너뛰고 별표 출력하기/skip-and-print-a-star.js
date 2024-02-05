const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);

let val = "";
for(var i = 1; i <= input; i++){
    for(var j = i; j > 0; j--){
        val += "*";
    }
    val += "\n\n";
}
for(var k = input-1; k > 0; k--){
    for(var l = k; l > 0; l--){
        val += "*";
    }
    val += "\n\n";
}
console.log(val);