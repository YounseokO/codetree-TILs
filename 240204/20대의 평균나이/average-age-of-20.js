const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = a.split(/\n/);

let count = 0;
let sum = 0;
while((19 < a[count])&&(a[count] < 30)){
    sum += Number(a[count]);
    count++;
}
let val = (sum/count).toFixed(2);
console.log(val);