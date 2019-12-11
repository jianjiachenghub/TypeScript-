"use strict";
// 这样能通过编译 mySum是通过赋值操作进行类型推论而推断出来的
var mySum = function (x, y) {
    return x + y;
};
//注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>
//函数声明表达式的类型 (x: number, y: number) => number 接受两个number参数返回一个number
var mySum2 = function (x, y) {
    return x + y;
};
//# sourceMappingURL=函数表达式.js.map