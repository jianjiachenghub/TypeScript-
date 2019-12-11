"use strict";
/*数值*/
var isDone = false;
var createdByNewBoolean = new Boolean(0);
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
/*字符串*/
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
/*空值*/
//用 void 表示没有任何返回值的函数：
function alertName() {
    alert('My name is Tom');
}
//void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
var unusable = undefined;
/* Null 和 Undefined */
// void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
var u = undefined;
var n = null;
/* // 这样不会报错  TODO:与文档说法不一致，会报错
let num: number = undefined;

// 这样也不会报错
let u2: undefined;
let num2: number = u2; */
//# sourceMappingURL=datatype.js.map