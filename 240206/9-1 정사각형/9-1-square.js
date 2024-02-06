const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = Number(a);
let cnt = 9;
let val = "";

for(var i = 0; i < a; i++){
    val = "";
    for(var j = 0; j < a; j++){
        val += cnt--;
        if(cnt == 0){
            cnt = 9;
        }
    }
    console.log(val);
}