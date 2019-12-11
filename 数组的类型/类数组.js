"use strict";
function sum() {
    var args = arguments; // 报错
}
function sum2() {
    var args = arguments;
}
//事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
function sum3() {
    var args = arguments;
}
/* interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
} */ 
//# sourceMappingURL=类数组.js.map