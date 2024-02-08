const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

input = Number(input);

let cnt = 1;
let val = "";//문자열로 출력
let num = 0;
let Arr = Array.from(Array(input), () => Array(input).fill(0));
for(var i = 0; i < input; i++){
    for(var j = 0; j < input; j++){        
        Arr[i][j] = cnt++;
    }
}
for(var i = 0; i < Arr.length; i++){
    
    for(var j = (Arr[i].length -1); j >= 0; j--){       
        if(j % 2 == 1){
            val += Arr[j][i] + " ";
        }else{
            //역으로 출력하는 방법 생각 필요
            num = Math.abs(i-(Arr.length-1));
            val += Arr[j][num] + " ";


        }

    }
    
    val += "\n";
}
console.log(val);