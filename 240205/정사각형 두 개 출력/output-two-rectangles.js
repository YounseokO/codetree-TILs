const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);

let val = "";

for(var i = 0; i < input; i++){
    for(var j = 0; j < input; j++){
        val += "*";
    }
    val += "\n";
}
for(var k = 0; k < 2; k++){
    console.log(val);
}