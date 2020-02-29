const expect = require("chai").expect;
const runParallel2 = require("./Promise控制并发.ts");

type returnType = Array<(x: number) => Promise<string>> | Array<string>;

/**
 * @description 构造测试数据 任务用setTimeout模拟,以等待时间命名任务
 * @date 2020-02-28
 * @param {number} size 任务个数
 * @returns {Array<returnType>} [任务列表,期望值]
 */
function getTestData(size: number): Array<returnType> {
  // 随机生成小于5000mm的等待时间
  let randomNum2 = Array(size)
    .fill(null)
    .map(() => Math.floor(Math.random() * 5000 + 1));
  console.log(randomNum2);
  // 生成任务列表
  let jobs2: Array<(x: number) => Promise<string>> = [];
  for (let i = 0; i < size; i++) {
    jobs2.push(
      () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("执行后的" + randomNum2[i] + "任务");
          }, randomNum2[i]);
        })
    );
  }
  // 计算期望值
  let expectRes = randomNum2.map(value => {
    return "执行后的" + value + "任务";
  });

  return [jobs2, expectRes];
}

describe("Test", function() {
  // 超时时间默认2000ms 不够
  this.timeout(1000000);
  it("最大并发数为3 执行的方法为10个", function(done) {
    let [jobs1, expectRes1] = getTestData(10);
    runParallel2(jobs1)
      .then((res: any) => {
        expect(res).to.deep.equal(expectRes1);
        done();
      })
      .catch((err: any) => {
        console.error("Handling promise rejection", err);
      });
  });
  it("最大并发数为3 执行的方法为15个", function(done) {
    let [jobs2, expectRes2] = getTestData(15);
    runParallel2(jobs2)
      .then((res: any) => {
        expect(res).to.deep.equal(expectRes2);
        done();
      })
      .catch((err: any) => {
        console.error("Handling promise rejection", err);
      });
  });
});
