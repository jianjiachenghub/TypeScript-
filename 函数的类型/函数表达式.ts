// 这样能通过编译 mySum是通过赋值操作进行类型推论而推断出来的
let mySum = function (x: number, y: number): number {
    return x + y;
};


//注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>
//函数声明表达式的类型 (x: number, y: number) => number 接受两个number参数返回一个number
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

//再类型声明的时候箭头函数指明函数的类型，但也可以用在函数的实现   
let mySum3: (x: number, y: number) => number = (x, y) => x+y 





