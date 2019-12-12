"use strict";
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = 'Jack'; //ES7的提案 实例属性
        // ...
    }
    return Animal;
}());
var a = new Animal(); // TODO:为什么这里TSLint要提示An argument for 'name' was not provided. 类型“Animal”上不存在属性“name”
console.log(a.name); // Jack
//static 定义一个静态属性 不用实例化也能调属性
var Animal2 = /** @class */ (function () {
    function Animal2() {
        // ...
    }
    Animal2.num = 42;
    return Animal2;
}());
console.log(Animal2.num); // 42
//# sourceMappingURL=ES7.js.map