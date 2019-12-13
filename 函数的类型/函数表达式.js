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
//再类型声明的时候箭头函数指明函数的类型，但也可以用在函数的实现   
var mySum3 = function (x, y) { return x + y; };
//使用带有调用签名的对象字面量来定义函数(感觉和用接口定义函数类似)  {}必须加 不然无法识别“ ： ” 
var mySum4 = function (x, y) { return x + y; };
console.log(mySum4(1, 2));
//# sourceMappingURL=函数表达式.js.map