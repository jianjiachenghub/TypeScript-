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



// Unknown 类型
// unknown与any的最大区别是： 任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。
// unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any
let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK

let value1: unknown = value; // OK
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
let value7: any[] = value; // Error
let value8: Function = value; // Error

// Never 类型

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {}
  }
  