"use strict";
/**
 * 泛型约束
 * 相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。
 * 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。
 * 为此，我们需要列出对于T的约束要求,用extends关键字实现
 */
function loggingIdentity(arg) {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
//extends关键字还实现约束
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
// 可以理解为约束条件就是：传入的数据必须包含我接口指定的类型，否则报错
loggingIdentity2(3); // 报错 不满足约束条件
loggingIdentity2({ length: 10 }); // 报错 不满足约束条件
loggingIdentity2({ length: 10, name: 'Jian' });
loggingIdentity2({ length: 10, name: 'Jian', age: 20 });
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x9 = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x9, { b: 10, d: 20, });
copyFields(x9, { b: 10, d: 20, f: 30 }); // 报错 f属性没有在x9中
//# sourceMappingURL=泛型约束.js.map