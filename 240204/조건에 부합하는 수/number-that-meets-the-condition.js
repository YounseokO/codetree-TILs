const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = Number(a);

let arr = "";
for(var i = 1; i <= a; i++){
    if((i%2==0)&&(i%4!=0)){
        continue;
    }else if((Math.floor(i/8))%2 == 0){
        continue;
    }else if((i%7)<4){
        continue;
    }else{
        arr += i + " ";
    }
}
console.log(arr);