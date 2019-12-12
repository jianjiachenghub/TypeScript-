"use strict";
/**
 * 实现（implements）
 * 一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，
 * 这时候就可以把特性提取成接口（interfaces），
 * 用 implements 关键字来实现。
 * 这个特性大大提高了面向对象的灵活性。
 * 一个类可以实现多个接口
 * 接口可以继承接口
 * 接口也可以继承继承类
 */
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
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    return Car;
}());
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2.prototype.alert = function () {
        console.log('Car alert');
    };
    Car2.prototype.lightOn = function () {
        console.log('Car light on');
    };
    Car2.prototype.lightOff = function () {
        console.log('Car light off');
    };
    return Car2;
}());
/*接口可以继承类*/
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
// Button从Control那里已经继承来了state不用实现
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
// 错误：“Image”类型缺少“state”属性。
var Image = /** @class */ (function () {
    function Image() {
    }
    Image.prototype.select = function () { };
    return Image;
}());
//# sourceMappingURL=类实现接口.js.map