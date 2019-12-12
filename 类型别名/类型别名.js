"use strict";
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return "123";
    }
}
var sumFun = function (x, y) {
    return x + y;
};
console.log(sumFun(1, 2));
// 这里验证了一下其实右边可以再跟一个不带类型的箭头函数
var sumFun2 = function (x, y) { return x + y; };
console.log(sumFun2(3, 4));
function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
//# sourceMappingURL=类型别名.js.map