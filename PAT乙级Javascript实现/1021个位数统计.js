let readline = require('readline');
let rl = readline.Interface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',function(data){
    let obj = {};
    for(let i = 0;i<data.length;i++){
        if(obj[data[i]] == undefined){
            obj[data[i]] = 1;
        }else{
            obj[data[i]]++;
        }
    }
    for(let key in obj){
        console.log(`${key}:${obj[key]}`);
    }
})