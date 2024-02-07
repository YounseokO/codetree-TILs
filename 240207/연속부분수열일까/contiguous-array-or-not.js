const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\n/);

let a = input[1].split(/\s/);
let b = input[2].split(/\s/);
let answ = "No";

for(var i = 0; i < a.length; i++){
    if(a[i]== b[0]){
        for(var x = 1; x < b.length; x++){
            if(a[i+x]==b[x]){
                answ = "Yes"
            }else{
                answ = "No"
                break;
            }
        }
        if(answ == "Yes"){
            break;
        }
    }
}

console.log(answ);