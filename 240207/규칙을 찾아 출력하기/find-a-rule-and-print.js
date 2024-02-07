const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let val = "";
for(var i = 0; i < input; i++){
    val = "";
    for(var j = 0; j < input; j++){
        if((i == 0)||(i == input -1)){
            val += "* ";
        }else{
            if((j < i)||(j == input -1)){
                val += "* ";
            }else{
                val += "  ";
            }
        }
    }
    console.log(val);
}