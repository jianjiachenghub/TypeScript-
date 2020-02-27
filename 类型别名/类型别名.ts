type Name = string;
type NameOrResolver = Name;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }else{
        return "123"
    }
}

type sumFunType = (x: number, y: number) => number ;
let sumFun:sumFunType = function (x: number, y: number): number {
    return x + y;
};
console.log(sumFun(1,2))

// 这里验证了一下其实右边可以再跟一个不带类型的箭头函数
let sumFun2:sumFunType = (x, y) => x+y ;
console.log(sumFun2(3,4))



// 字面量类型
// 这里文档写错了getElementById('hello')可能为null ele类型后面得加上一个null类型
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element|null, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'

type jian = {
    name:string,
    age:number,
    hi:number
}

let jianx:jian = {
    name:'asd',
    age:12
}

