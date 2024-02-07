const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

input = input.split(/\s/);

let a = Number(input[0]);
let b = Number(input[1]);
let cal = 0;// cal = 나머지 계산용
let Arr = new Array();
while(a > 0){
    cal = a % b
    a = Math.trunc(a/b);
    Arr.push(cal);

}
cal = 0;
let setArr = new Set(Arr);
setArr =Array.from(setArr);
let cnt = 0;
for(j = 0; j < setArr.length; j++){
    cnt = "";
    for(var i = 0; i < Arr.length; i++){
        if(setArr[j] == Arr[i]){
            cnt++;
        }
    }
    cal += (cnt**2);
}


console.log(cal);