const fs = require("fs");
let input = fs.readFileSync(0);


if(input >= 3000){
    console.log("book");
}else if(input >= 1000){
    console.log("mask");
}else if(input >= 500){
    console.log("pen");
}else{
    console.log("no");
}