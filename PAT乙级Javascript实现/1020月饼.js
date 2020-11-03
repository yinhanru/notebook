let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let lines = [];
/**
 * 思路
 * 知道库存量 和 总售价 可以求得 单价
 * 单价越高的，卖的越多，收益越大
 */
rl.on('line',function(line){
    lines.push(line);
    let arr1 = lines[0].split(' ');
    if(lines.length === 3){
        let N = +arr1[0]; 
        let D = +arr1[1];
        let arr2 = lines[1].split(' ');
        let arr3 = lines[2].split(' ');
        let arr = [];
        /**
         * 核心：
         * 创建一个对象，里面的属性分别为 库存量、总售价、单价
         * 根据单价数组 arr进行降序排序
         */
        for(let i = 0 ;i<N; i++){
            let obj = {'kc':'','zsj':'','dj':''};
            obj['kc'] = +arr2[i];
            obj['zsj'] = +arr3[i];
            obj['dj'] = (+arr3[i])/(+arr2[i]);
            arr.push(obj);
        }
        arr.sort((a,b)=>{
            return b.dj - a.dj
        })
        let sum = 0;
        for(let i = 0;i<N;i++){
            if(arr[i].kc> D){
                sum += arr[i].zsj *(D/arr[i].kc);
                break;
            }else{
                sum += arr[i].zsj;
                D = D - arr[i].kc
            }
        }
        console.log(sum.toFixed(2))
        
    }
})