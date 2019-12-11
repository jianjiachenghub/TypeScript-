/* let myFavoriteNumber = 'seven'; // TODO:为什么不能和其他文件里的变量重名
myFavoriteNumber = 7; */

let myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;
// 等价于
let myFavoriteNumber3: string = 'seven';
myFavoriteNumber3 = 7;

let myFavoriteNumber4
myFavoriteNumber4 = "xxx"
console.log(myFavoriteNumber4.length)
myFavoriteNumber4 = 7;
console.log(myFavoriteNumber4.length) // 访问属性的时候回去推断类型在访问属性


