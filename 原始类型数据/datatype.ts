/*数值*/
let isDone: boolean = false;
let createdByNewBoolean= new Boolean(0);

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;



/*字符串*/
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;



/*空值*/
//用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert('My name is Tom');
}
//void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let unusable: void = undefined;



/* Null 和 Undefined */
// void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
let u: undefined = undefined;
let n: null = null;

/* // 这样不会报错  TODO:与文档说法不一致，会报错       
let num: number = undefined;

// 这样也不会报错
let u2: undefined;
let num2: number = u2; */


