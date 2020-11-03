let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
/**
 * 思路
 * 一开始题意理解错了，以为是对输入的数直接组合，还想也太简单了
 * 输入的样例共10个数（看成数组），每个不为零的数都代表数组下标出现几次
 * 输入样例 2 2 0 0 0 3 0 0 1 0
 * 代表 0出现2次，1出现两次，5出现3次，8出现一次
 * 1、除了0以外；双层for循环，将所有出现的值输出到数组中
 * 2、将所有的0输出组合成字符，插入到输出数组的第二位
 */
rl.on('line',function(data){
    let arr = data.split(' ');
    let res = [];
    for(let i =1;i<arr.length;i++){
        if(arr[i]!==0){
            for(let j = 0;j<arr[i] ;j++){
                res.push(i)
            }
        }
    }
    let str0 = ''
    if(arr[0]!==0){
        for(let i= 0;i<arr[0];i++){
            str0 += '0'
        }
    }
    console.log(res[0]+str0+(res.slice(1)).join(''))
})