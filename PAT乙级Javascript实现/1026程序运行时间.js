let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
/**
 * 思路
 * 首先四舍五入，算出打点计时器记了多少秒 S
 * 之后分别除 3600 60 计算 小时数 分钟数
 * 取余计算秒数
 * 输出的时候需要是两位数的格式，不足在前面补0
 */
rl.on('line',function(line){
    let arr = line.split(' ');
    let C1 = +arr[0];
    let C2 = +arr[1];
    let S = Math.round((C2-C1)/100);

    let hh = parseInt(S/3600);
    let mm = parseInt((S%3600)/60);
    let ss = S%3600%60;
    
    if(hh<10) hh = '0'+hh;
    if(mm<10) mm = '0'+mm;
    if(ss<10) ss = '0'+ss;
    
    console.log(hh+':'+mm+':'+ss)
})