const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\n/);

let val = 1;

for(var i = 0; i < input.length; i++){
    if(input[i]%3 != 0){
        val = 0;
    }
}
console.log(val);