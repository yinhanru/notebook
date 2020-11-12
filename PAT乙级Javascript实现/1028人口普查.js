let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
/**
 * 思路
 * 参考 https://www.liuchuo.net/archives/557
 * 很清晰
 */
let lines = [];
rl.on('line',function(line){
    lines.push(line);
    let n = +lines[0];
    if(lines.length === n+1){
        let maxDate = '1814/09/06';let minDate = '2014/09/06';
        let maxName;let minName;
        let count =0;
        for(let i = 1;i<lines.length;i++){
            let arr1 = lines[i].split(' ');
            //let obj = {'name':'','date':''};
            //开始是想用对象放每一个名称和年月日；结果这种格式不好 sort；
            if(arr1[1]>='1814/09/06'&&arr1[1]<='2014/09/06'){
                if(maxDate<=arr1[1]){
                    maxDate = arr1[1];
                    maxName = arr1[0];
                }
                if(minDate>=arr1[1]){
                    minDate = arr1[1];
                    minName = arr1[0];
                }
                count++;
            }
        }
        //若没有这句判断，测试点3错误，若count为0时，直接输出0；
        if(count === 0){
            console.log(count);
        }else{
             console.log(count +' '+minName+' '+maxName);
        }
        //测试点4 超时
        
    }
})