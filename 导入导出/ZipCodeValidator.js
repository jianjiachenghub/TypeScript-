"use strict";
// 若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
module.exports = ZipCodeValidator;
//# sourceMappingURL=ZipCodeValidator.js.map