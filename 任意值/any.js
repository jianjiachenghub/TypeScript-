"use strict";
//any 类型，则允许被赋值为任意类型
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var anyThing = 'hello';
console.log(anyThing.myName);
// 在任意值上访问任何属性都是允许的：
var something;
something = 'seven';
something.x = 1;
something.setName('Tom');
var something2; // TODO:官方说法是与any等价，但在调试的时候any能加属性这个不能
something2 = 'seven';
something2.x = 2; //没有声明为any那么这里就是访问属性之前赋值给的类型？
something2.setName('Tom');
//# sourceMappingURL=any.js.map