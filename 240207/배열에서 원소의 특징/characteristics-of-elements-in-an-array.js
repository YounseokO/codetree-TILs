const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);

for(var i = 0; i < input.length; i++){
    if(input[i]%3 == 0){
        console.log(input[i-1]);
        break;
    }
}