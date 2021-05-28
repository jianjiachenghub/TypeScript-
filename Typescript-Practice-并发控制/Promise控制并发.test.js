"use strict";
var expect = require("chai").expect;
var runParallel2 = require("./Promise控制并发.ts");
/**
 * @description 构造测试数据 任务用setTimeout模拟,以等待时间命名任务
 * @date 2020-02-28
 * @param {number} size 任务个数
 * @returns {Array<returnType>} [任务列表,期望值]
 */
function getTestData(size) {
    // 随机生成小于5000mm的等待时间
    var randomNum2 = Array(size)
        .fill(null)
        .map(function () { return Math.floor(Math.random() * 5000 + 1); });
    console.log(randomNum2);
    // 生成任务列表
    var jobs2 = [];
    var _loop_1 = function (i) {
        jobs2.push(function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve("执行后的" + randomNum2[i] + "任务");
                }, randomNum2[i]);
            });
        });
    };
    for (var i = 0; i < size; i++) {
        _loop_1(i);
    }
    // 计算期望值
    var expectRes = randomNum2.map(function (value) {
        return "执行后的" + value + "任务";
    });
    return [jobs2, expectRes];
}
describe("Test", function () {
    // 超时时间默认2000ms 不够
    this.timeout(1000000);
    it("最大并发数为3 执行的方法为10个", function (done) {
        var _a = getTestData(10), jobs1 = _a[0], expectRes1 = _a[1];
        runParallel2(jobs1)
            .then(function (res) {
            expect(res).to.deep.equal(expectRes1);
            done();
        })
            .catch(function (err) {
            console.error("Handling promise rejection", err);
        });
    });
    it("最大并发数为3 执行的方法为15个", function (done) {
        var _a = getTestData(15), jobs2 = _a[0], expectRes2 = _a[1];
        runParallel2(jobs2)
            .then(function (res) {
            expect(res).to.deep.equal(expectRes2);
            done();
        })
            .catch(function (err) {
            console.error("Handling promise rejection", err);
        });
    });
});
//# sourceMappingURL=Promise控制并发.test.js.map