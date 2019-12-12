"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * TypeScript 中类的用法
 * 三种访问修饰符（Access Modifiers）
 * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 * 还有一种只读修饰符可与访问修饰符同时使用 readonly
 */
/* 共有属性*/
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name2 = 'name2';
        this.name = name;
        //console.log(name2) 报错 要用this.name2
        //并且this调用的属性必须在上面声明
    }
    return Animal3;
}());
var a3 = new Animal3('Jack');
console.log(a3.name); // Jack
a3.name = 'Tom';
console.log(a3.name); // Tom
/* 私有属性*/
var Animal4 = /** @class */ (function () {
    function Animal4(name) {
        this.name = name;
    }
    return Animal4;
}());
var a4 = new Animal4('Jack');
console.log(a4.name); // Property 'name' is private and only accessible within class 'Animal'.
a4.name = 'Tom'; // Property 'name' is private and only accessible within class 'Animal'.
/* protected在子类中能访问而private不能 */
var Animal5 = /** @class */ (function () {
    function Animal5(name) {
        this.privateName = 123;
        this.publicName = 456;
        this.name = name;
    }
    return Animal5;
}());
var Cat5 = /** @class */ (function (_super) {
    __extends(Cat5, _super);
    function Cat5(name) {
        var _this = this;
        console.log(_this.publicName); //访问派生类的构造函数中的 "this" 前，必须调用 "super" TODO:搞清楚编译后的 _this = _super.call(this, name) || this;
        _this = _super.call(this, name) || this;
        console.log(_this.publicName);
        console.log(_this.name);
        console.log(_this.privateName); //Property 'privateName' is private and only accessible within class 'Animal5'
        return _this;
    }
    return Cat5;
}(Animal5));
var a5 = new Cat5('Jack5'); // console Jack5
/* 当构造函数修饰为 private 时，该类不允许被继承或者实例化 */
var Animal6 = /** @class */ (function () {
    function Animal6(name) {
        this.name = name;
    }
    return Animal6;
}());
var Cat6 = /** @class */ (function (_super) {
    __extends(Cat6, _super);
    function Cat6(name) {
        return _super.call(this, name) || this;
    }
    return Cat6;
}(Animal6));
var a6 = new Cat6('Jack');
/* 当构造函数修饰为 protected 时，该类只允许被继承 */
var Animal7 = /** @class */ (function () {
    function Animal7(name) {
        this.name = name;
    }
    return Animal7;
}());
var Cat7 = /** @class */ (function (_super) {
    __extends(Cat7, _super);
    function Cat7(name) {
        return _super.call(this, name) || this;
    }
    return Cat7;
}(Animal7));
var a7 = new Animal7('Jack'); // Constructor of class 'Animal7' is protected and only accessible within the class declaration
/* 修饰符还可以使用在构造函数参数中，等同于类中定义该属性(意思就是我上面猜的Ts类属性必须先声明是对的) */
var Animal8 = /** @class */ (function () {
    // public name: string;
    function Animal8(name) {
        this.name = name;
        this.name = name;
    }
    return Animal8;
}());
/* readonly  */
//只读属性关键字，只允许出现在属性声明或索引签名中
//注意如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面
var Animal9 = /** @class */ (function () {
    // public readonly name;
    function Animal9(name) {
        this.name = name;
        this.name = name;
    }
    return Animal9;
}());
//# sourceMappingURL=Ts中的类.js.map