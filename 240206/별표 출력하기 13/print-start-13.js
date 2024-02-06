const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let val = "";

for(var i = 0; i < input*2; i++){
    if(i%2 == 0){
        for(var j = i; j < input*2; j = j+2){
            val += "* ";
        }
        val += "\n";
    }else{
        for(var j = 0; j < i/2; j++){
            val += "* ";
        }
        val += "\n";
    }


}

console.log(val);