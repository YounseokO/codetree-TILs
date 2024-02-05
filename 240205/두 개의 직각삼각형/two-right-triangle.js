const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let val = "";
for(var i = 0; i < input; i++){
    for(var j = input; j > i ; j--){
        val += "*";
    }
    for(var l = 0; l < i ; l++){
        val += "  ";
    }
    for(var k = input; k > i ; k--){
        val += "*";
    }
    val +="\n";
}
console.log(val);