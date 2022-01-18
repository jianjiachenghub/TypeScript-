"use strict";
/**
 * @description 并发控制函数
 * @date 2020-02-28
 * @param {Array< (x: number) => Promise<string> >} jobs 任务列表
 * @returns {Array<string>} 任务执行结果
 */
function runParallel(jobs) {
    var resValue = [];
    var count = 0;
    var max = 3;
    var i = 0;
    return new Promise(function (resolve) {
        function requestWork() {
            // count==jobs.length时，可能还有任务还在执行，当i==0任务肯定都执行完了
            if (count >= jobs.length && i === 0) {
                console.log(resValue);
                resolve(resValue);
            }
            var _loop_1 = function () {
                i++;
                // 拷贝一份到作用域链 不然异步的回来在修改count已经变了
                var memoIndex = count;
                jobs[memoIndex](i).then(function (res) {
                    resValue[memoIndex] = res;
                    i--;
                    console.log('第' + memoIndex + '个：' + res);
                    requestWork();
                });
                count++;
            };
            // count在最后的时候有可能越位需要判断
            while (i < max && count < jobs.length) {
                _loop_1();
            }
        }
        requestWork();
    });
}
// 取10个5秒内的随机数
/* let randomNum:Array<number> = Array(10).fill(null).map(()=>Math.floor(Math.random()*5000+1))
console.log(randomNum)
// 放入10个测试方法到jobs
let jobs:Array<(x: number) => Promise<string>> = [];
for (let i = 0; i < 10; i++) {
  jobs.push(
    () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('执行后的'+randomNum[i]+'任务');
        }, randomNum[i]);
      })
  );
} */
//runParallel(jobs).then((res)=>console.log(res));
module.exports = runParallel;
//# sourceMappingURL=Promise控制并发.js.map