"use strict";
/**
 * 泛型类型
 * 泛型函数的类型与非泛型函数的类型没什么不同，只是声明类型的时候有一个类型参数在最前面
 * 泛型接口和泛型函数类似
 */
function identity2(arg) {
    return arg;
}
var myIdentity = identity2;
//使用带有调用签名的对象字面量来定义泛型函数 感觉有点像接口定义函数 
var myIdentity2 = identity2;
function identity3(arg) {
    return arg;
}
var myIdentity3 = identity3;
var x0 = myIdentity3(1); //1  类型推断
var x1 = myIdentity3(2); // 2
var x2 = myIdentity3(3); // 报错
function identity4(arg) {
    return arg;
}
var myIdentity4 = identity4;
/*
 * 泛型类
*/
//这里官方实例应该是错了：成员变量未在构造函数中初始化Property 'zeroValue' has no initializer and is not definitely assigned in the constructor
//只要是个成员都是需要初始化的，要么定义时初始化，要么在构建函数里赋值
//在后面加上？号才能通过编译，表示可选属性，相当于赋 undefined，就不要再在构造函数里初始化了
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
//在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型
//TODO: 意思是{new(): T; }这个是构造函数的类类型？
function create(c) {
    return new c();
}
//# sourceMappingURL=泛型类型.js.map