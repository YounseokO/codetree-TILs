const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\n/);

let word = input[0].split('');//문자열 배열
let tempNumber = 0;
for(var i = 0; i < word.length; i++){
    tempNumber = word[i].charCodeAt();
    if(tempNumber <= 90){
        tempNumber += 32;
        word[i] = String.fromCharCode(tempNumber);
    }else{
        tempNumber -= 32;
        word[i] = String.fromCharCode(tempNumber);
    }

}

console.log(word.join(''));