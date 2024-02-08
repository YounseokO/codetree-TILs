const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

input = input.split(/\n/);
input = input[1].split(/\s/);

let cnt = 0;

for(var i = 0; i < input.length; i++){
    if(input[i] == 2){
        cnt++;
        if(cnt >= 3){
            console.log(i+1);
            break;
        }
    }
}