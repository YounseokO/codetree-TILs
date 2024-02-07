const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = Number(input);
let cnt = 0;
let val = "";
for(var i = 1; i <= input; i++){
    val = "";
    for(var j = 1; j <= input; j++){
        if(i%2 == 1){
            val += ++cnt + " ";
        }else{
            cnt += 2;
            val += cnt + " ";
        }
    }
    console.log(val);
}