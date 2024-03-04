const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\n/);

let restaurants = input[1].split(/\s/);
let manager = Number(input[2].split(/\s/)[0]);
let people = Number(input[2].split(/\s/)[1]);

let sum = 0;
let tempNum = 0;
for(var i = 0; i < restaurants.length; i++){
    tempNum = restaurants[i] - manager;
    if(tempNum > 0){
        sum += (tempNum/people)
        if(tempNum%people != 0){
            sum += 1;
        }
    }else{
        sum += 1;
    }
}
console.log(sum);