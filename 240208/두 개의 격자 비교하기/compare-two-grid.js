const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

input = input.split(/\n/);

let arr1 = "";
let arr2 = "";
let val = "";
let leng = ((input.length-1)/2);
for(var i = 1; i <= leng; i++){
    
    arr1 = input[i].split(/\s/);
    arr2 = input[i+leng].split(/\s/);
    for(var j = 0; j < arr1.length; j++){
        if(arr1[j] == arr2[j]){
            val += "0 ";
        }else{
            val += "1 ";
        }
    }
    val += "\n";
}
console.log(val);