const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\n/);
let n = Number(input[0]);
let intNum = input[1].split(/\s/);
//intNum = intNum.reverse();

let val = "";
for(var i = n-1; i >= 0; i--){
    if(Number(intNum[i])%2 == 0){
        val += intNum[i] + " ";
    }
}
/*
for(var i = 0; i < n; i++){
    if(Number(intNum[i])%2 == 0){
        val += intNum[i] + " ";
    }
}
*/
console.log(val);