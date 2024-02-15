const fs = require("fs");

let a = fs.readFileSync(0).toString().trim().split(/\n/);

let n = Number(a[0]);
let word = a[a.length-1];

let cnt = 0;
let cntWord = 0;
for(var i = 1 ; i < n; i++){
    if(a[i].includes(word)){
        cntWord++;
        cnt += a[i].length;
    }
    
}

console.log(cntWord + " " + (cnt/cntWord).toFixed(2));