const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let word = "";

for(var i = 0; i < input.length; i++){
    if(i % 2 == 1){
        word += input[i];
    }
}
let reword ="";
for(var i = (word.length -1); i >= 0; i--){
    reword += word[i];
}
console.log(reword);