/**
 * 泛型约束：在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
 * 比如：相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。 
 * 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 
 * 为此，我们需要列出对于T的约束要求,用extends关键字实现
 */

function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

interface Lengthwise {
    length: number;
    name:string;
}
//extends关键字还实现约束
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// 可以理解为约束条件就是：传入的数据必须包含我接口指定的类型，否则报错
loggingIdentity2(3);// 报错 不满足约束条件
loggingIdentity2({length: 10});// 报错 不满足约束条件
loggingIdentity2({length: 10, name: 'Jian'});
loggingIdentity2({length: 10, name: 'Jian',age:20});


function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}

let x9 = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x9, { b: 10, d: 20, });
copyFields(x9, { b: 10, d: 20,f:30 });// 报错 f属性没有在x9中