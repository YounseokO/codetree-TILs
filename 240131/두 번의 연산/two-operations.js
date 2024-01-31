const fs = require("fs");
let input = fs.readFileSync(0);
input = Number(input);
if(input%2 == 1){
    input += 3;
    if(input%3 == 0){
        input /= 3;
    }
}
console.log(input)