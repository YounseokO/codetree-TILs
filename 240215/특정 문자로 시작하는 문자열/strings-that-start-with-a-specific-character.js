const fs = require("fs");

let a = fs.readFileSync(0).toString().trim().split(/\n/);

let n = Number(a[0]);
let word = a[n+1].trim();

let cnt = 0;
let cntWord = 0;
for(var i = 1 ; i <= n; i++){
    if(a[i].trim()[0] == word){
        cntWord++;
        cnt += a[i].trim().length;
    }    
}


console.log(cntWord, (cnt/cntWord).toFixed(2));
//console.log(cntWord + " " + (cnt/cntWord).toFixed(2));