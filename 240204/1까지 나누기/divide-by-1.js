const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = Number(a);

let count = 1;
while(a > 1){
    a = Math.floor(a/count);
    if(a>1){
        count++;
    }
}
console.log(count);