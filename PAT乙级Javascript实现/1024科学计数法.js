/**
 * 思路
 * 可参考https://blog.csdn.net/liuchuo/article/details/51994532 思路
 * 很清晰
 * 先用E来隔断，得到两个数据
 */
let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',function(data){
    //用E分割前边部分和指数部分
    let arr = data.split('E');
    let res = '';
    //将这两部分的数值 ，分别去掉符号之后存为 a b;
    let a = arr[0].slice(1);
    if(arr[0][0] === '-'){
        res += '-';
    }
    let b = +arr[1].slice(1);
    //当指数部分为负数时
    if(arr[1][0] === '-'){
        //先输出0.
        res += '0.';
        //再输出比指数部分数值小一的数目的0
        for(let i = 0 ;i<b-1;i++){
            res += '0';
        }
        //最后输出前半部分的数，剔除小数点
        for(let i = 0;i<a.length;i++){
            if(a[i] === '.') continue;
            res += a[i];
        }
    }
    //当指数部分为正数时
    if(arr[1][0] === '+'){
        //先输出第一位整数
        res += a[0];
        //从小数部分开始输出，如果已经输出的位数t(i-1) 等于 a.length-2的位数 ；则以后的数值补0
        for(let i = 2;i<2+b;i++){
            if(i>=a.length){
                res += '0'
            }else{
                res += a[i]
            }
        }
        //如果输出的位数比 a的小数部分的位数小，则输出小数点，之后再输出a中剩余的数值
        if(2+b<a.length){
            res += '.'
            for(let i = 2+b;i<a.length;i++){
                res += a[i];
            }
        }
    }
    console.log(res);
    
})