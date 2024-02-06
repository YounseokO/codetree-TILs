const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = Number(a);

let val = "";
for(var i = 0; i < a; i++){
    val = "";
    for(var j = a; j > 0; j--){
        val += j +" ";
    }
    console.log(val);
}