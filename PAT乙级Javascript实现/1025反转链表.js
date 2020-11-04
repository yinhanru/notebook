/**
 * 难点读取所有的行，构造单链表
 * 和普通的链表不同，这里要多定义一个存储地址的变量
 */
function Node(address,data){
    this.address = address;
    this.data = data;
    this.next = null;
}
function List(){
    this.head = new Node('head','head');
    this.size = 0;
}
List.prototype = {
    add:function(address,data){
        var current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = new Node(address,data);
        this.size++;
    }
}
let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let lines = [];
rl.on('line',function(line){
    lines.push(line);
    let arr = lines[0].split(' ');
    let address = arr[0]; 
    let n = +arr[1];
    let K = +arr[2];
    if(lines.length === n+1){
        let list = new List();
        //双层for循环，组织好链表
        for(let j = 0;j<n;j++){
             for(let i = 1;i<n+1;i++){
                let temp = lines[i].split(' ');
                if(temp[0] === address){
                    list.add(temp[0],+temp[1]);
                    address = temp[2];
                    break;
                }
            }
        }
        //参考leecode 92题的思路
        let dummy = new Node('0',0);
        dummy.next = list.head.next;
        let rever = dummy;
        //参考leecode的反转链表206题的思路
        let pre = null;
        let curr = list.head.next;
        for(let i = 0;i<K ;i++){
            let temp = curr.next;
            curr.next = pre;
            pre = curr;
            curr = temp;
        }
        rever.next.next = curr;
        rever.next = pre;
        let res = dummy.next;
        for(let i =0;i<n;i++){
            let nextaddress = res.next!=null ? res.next.address : -1
            console.log(res.address +' '+ res.data +' '+ nextaddress);
            res = res.next;
        }

    }
})
/**
 * 测试点1 错误
 * 测试点5 超时
 * 测试点6 非零返回
 */