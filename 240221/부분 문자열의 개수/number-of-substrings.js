const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\n/);
let A = input[0];
let B = input[1];
let count = 0;

for(var i = 0; i <= (A.length - B.length); i++){
    let temp = B.length + i;
    if(A.slice(i,temp) == B){
        count += 1;
    }
}
console.log(count);