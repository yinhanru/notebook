let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',function(line){
    let arr = line.split(' ');
    let res = []
    let N = +arr[0];
    let S = arr[1];
    let i = 1;
    let m =0;
    res.push(S);
    while(N-1>0){
        ++i;
        N = N-(i*2-1)*2;
        if(N>0){
            let temp ='';
            for(let j=0;j<i*2-1;j++){
                temp += S;
            }
            res.push(temp);
            res.unshift(temp);
        }else{
            m = N-1+(i*2-1)*2;
        }
    }
    for(let i = 0;i<res.length;i++){
        let temp = '';
        let t = (res[0].length - res[i].length)/2
        for(let i=0;i<t;i++){
            temp += ' ';
        }
        console.log(temp + res[i]);
    }
    console.log(m);

})