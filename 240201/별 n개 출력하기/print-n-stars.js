const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = Number(a);

for(var i = 0; i < a; i++){
    console.log("*");
}