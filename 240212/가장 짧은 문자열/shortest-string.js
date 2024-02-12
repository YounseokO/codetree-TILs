const fs = require("fs");

let a = fs.readFileSync(0).toString().trim().split(/\n/);

let min = a[0].length;
let max = a[0].length;

for(var i = 1; i < a.length; i++){
    if(a[i].length < min){
        min = a[i].length;
    }else if(a[i].length > max){
        max = a[i].length;
    }
}
console.log(max - min);