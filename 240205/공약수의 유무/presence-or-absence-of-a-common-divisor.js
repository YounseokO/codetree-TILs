const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);

let a = Number(input[0]);
let b = Number(input[1]);

let arr = new Array();
let val = 0;

for(var i = 1; i<1000; i++){
    if(2880 % i == 0){
        if(1920 % i == 0){
            arr.push(i);
        }
    }
}

for(var j = a; j <= b; j++){
    for(var k = 0; k < arr.length; k++){
        if(arr[k] == j){
            val = 1;
        }
    }
}

console.log(val);