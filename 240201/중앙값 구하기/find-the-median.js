const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split(/\s/);
/*
input.sort((a, b) => a - b);

console.log(input[1]);
*/
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if((a>b)&&(a>c)){
    if(b>c){
        console.log(b);
    }else{
        console.log(c);
    }
}else if((b>a)&&(b>c)){
    if(a>c){
        console.log(a);
    }else{
        console.log(c);
    }
}else if((c>a)&&(c>b)){
    if(a>b){
        console.log(a);
    }else{
        console.log(b);
    }
}else{
    if((a == b)||(a == c)){
        console.log(a);
    }else{
        console.log(b);
    }
}