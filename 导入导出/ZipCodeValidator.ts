// CommonJS和AMD是两个不同的JS模块规范，
// CommonJS应用于浏览器端，AMD适用于服务器端，
// Typescript为了兼容这两个规范，又引入一种导入和导出模块的方式。
// 若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。

let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export = ZipCodeValidator; // 类似默认导出了 把对外接口直接从新赋值

// export = {Saturn, shining}; // 只能有一句export =语句，所以多个导出内容要放在花括号中隔开，只有一个内容时可以去掉花括号

