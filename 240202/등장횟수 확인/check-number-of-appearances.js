const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\n/);

let cnt = 0;
for(var i = 0; i < input.length; i++){
    if(input[i]%2 == 0){
        cnt += 1;
    }
}
console.log(cnt);