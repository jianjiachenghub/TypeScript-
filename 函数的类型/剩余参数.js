"use strict";
//实上，items 是一个数组。所以我们可以用数组的类型来定义它：
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var itemss = [];
push(itemss, 1, 2, 3);
//# sourceMappingURL=剩余参数.js.map