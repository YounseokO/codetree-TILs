const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let val = "";
let char = 64;

for(var i = 0; i < input; i++){
    val = "";
    for(var j = 0; j < input; j++){
        if(j < i){
            val += "  ";
        }else{
            val += String.fromCharCode(++char) + " ";
            if(char == 90){
                char = 64;
            }
        }

    }
    console.log(val);
}