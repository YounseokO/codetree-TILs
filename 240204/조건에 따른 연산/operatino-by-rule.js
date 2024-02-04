const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = Number(a);
let cnt = 0;

while(a < 1000){
    if(a % 2 == 0){
        a = a * 3 + 1;
    }else{
        a = a * 2 + 2;
    }
    cnt++;
}
console.log(cnt);