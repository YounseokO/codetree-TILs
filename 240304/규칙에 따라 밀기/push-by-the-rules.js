const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\n/);

let word = input[0].split('');
let man = input[1];

let tempword = "";

for(var i = 0; i < man.length; i++){
    if(man[i] == "L"){
        tempword = word.shift();
        word.push(tempword); 
    }else{
        tempword = word.pop();
        word.unshift(tempword)//tempword + word; 
    }
}
console.log(word.join(''));