let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',function(line){
    let arr = line.split(' ');
    let sum = Number(arr[0])+Number(arr[1]);
    let D = +arr[2];
    let resArr = [];
    if(sum === 0 ){
        //考虑 输入的两个数都是0的情况
        console.log('0')
    }else{
         while(sum>0){
            let temp = sum%D;
            sum =  parseInt(sum/D);
            resArr.unshift(temp);
        }
        console.log(resArr.join(''));
    }
})