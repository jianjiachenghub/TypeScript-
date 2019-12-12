"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = "blue".length] = "Blue";
})(Color || (Color = {}));
;
//紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = "red".length] = "Red";
    Color2[Color2["Green"] = void 0] = "Green";
    Color2[Color2["Blue"] = void 0] = "Blue";
})(Color2 || (Color2 = {}));
; // index.ts(1,33): error TS1061: Enum member must have initializer.
/*
当满足以下条件时，枚举成员被当作是常数：
不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加 1。但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为 0。
枚举成员使用常数枚举表达式初始化。常数枚举表达式是 TypeScript 表达式的子集，它可以在编译阶段求值。当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：
数字字面量
引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用
带括号的常数枚举表达式
+, -, ~ 一元运算符应用于常数枚举表达式
+, -, *, /, %, <<, >>, >>>, &, |, ^ 二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为 NaN 或 Infinity，则会在编译阶段报错
所有其它情况的枚举成员被当作是需要计算得出的值。
*/ 
//# sourceMappingURL=常数项和计算所得项.js.map