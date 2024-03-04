const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\n/);

let a = input[0];
let b = input[1];
let tempNubmer = -1;

for(var i = 0 ; i < a.length; i++){
    a = a.slice(-1) + a.slice(0,-1);
    if(a == b){
        tempNubmer = i + 1;
    }
}
console.log(tempNubmer);