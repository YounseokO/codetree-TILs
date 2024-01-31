const fs = require("fs");
let n = fs.readFileSync(0).toString();

n = n.split(/\s/);
let a = Number(n[0]);
let b = Number(n[1]);

if(a>b){
    console.log(a*b);
}else{
    let temp = (b/a).floor(0);
    console.log(temp);
}