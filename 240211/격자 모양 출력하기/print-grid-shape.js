const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\n/);

let n = Number(input[0].trim().split(/\s/)[0]);
let m = Number(input[0].trim().split(/\s/)[1]);

let Arr = Array.from(Array(n), () => Array(n).fill(0));
let tempData = "";

let a = 0;
let b = 0;

for(var i = 1; i <= m; i++){
    tempData = input[i].trim().split(/\s/);
    a = Number(tempData[0]);
    b = Number(tempData[1]);

    Arr[a-1][b-1] = a * b;
    
}
let str = "";
for(var i = 0; i < Arr.length; i++){
    str = "";
    for(var j = 0; j < Arr[i].length; j++){
        str += Arr[i][j] + " ";
    }
    console.log(str);
}