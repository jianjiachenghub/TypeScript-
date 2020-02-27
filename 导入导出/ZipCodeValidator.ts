// 若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。

let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export = ZipCodeValidator;


