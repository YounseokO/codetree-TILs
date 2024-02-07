const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\n/);
let val = 0;
let n = Number(input[0]);
let a = 0;
let b = 0;
for(var i = 1; i <= n; i++){
    a = Number(input[i].split(/\s/)[0]);
    b = Number(input[i].split(/\s/)[1]);
    val = 0;
    for(var j = a; j <= b; j++){
        if(j%2 == 0){
            val += j;
        }
    }
    console.log(val);
}