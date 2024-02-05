const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let val = "";
for(var i = 1; i <= input; i++){
    for(var j = i; j < input; j++){
        val += " ";
    }
    for(var j = 0; j < i; j++){
        val += "* ";
    }
    val += "\n";
}

for(var i = input-1; i > 0; i--){
    for(var j = i; j < input; j++){
        val += " ";
    }
    for(var j = 0; j < i; j++){
        val += "* ";
    }
    val += "\n";
}
console.log(val);