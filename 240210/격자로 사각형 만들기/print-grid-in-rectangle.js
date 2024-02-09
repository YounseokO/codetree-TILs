const fs = require("fs");

let a = fs.readFileSync(0).toString().trim();

a = Number(a);

let Arr = Array.from(Array(a), () => Array(a).fill(1));

for(var i = 1; i < Arr.length; i++){
    for(var j = 1; j < Arr.length; j++){
        Arr[i][j] = (Arr[i][j-1] + Arr[i-1][j] + Arr[i-1][j-1]);
    }
}

let val = "";
for(var i = 0; i < Arr.length; i++){
    for(var j = 0; j < Arr.length; j++){
        val += Arr[i][j] + " ";
    }
    val += "\n";
}
console.log(val);