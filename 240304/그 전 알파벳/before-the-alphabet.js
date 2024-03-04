const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let word = input[0].charCodeAt();

if(word==97){
    console.log("z");
}else{
    word--;
    console.log(String.fromCharCode(word));
}