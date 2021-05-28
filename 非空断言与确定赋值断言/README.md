## 非空断言

在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型。具体而言，x! 将从 x 值域中排除 null 和 undefined 。



## 忽略 undefined 和 null 类型

```TS
function myFunc(maybeString: string | undefined | null) {
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'. 
  const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
}

```

## 调用函数时忽略 undefined 类型

```TS
type NumGenerator = () => number;

function myFunc(numGenerator: NumGenerator | undefined) {
  // Object is possibly 'undefined'.(2532)
  // Cannot invoke an object which is possibly 'undefined'.(2722)
  const num1 = numGenerator(); // Error
  const num2 = numGenerator!(); //OK
}

```

## 非空断言操作符被移除


因为 ! 非空断言操作符会从TS编译生成的 JavaScript 代码中移除，所以在实际使用的过程中，要特别注意。
```
const a: number | undefined = undefined;
const b: number = a!;
console.log(b); 

```
以上 TS 代码会编译生成以下 ES5 代码：

```
"use strict";
const a = undefined;
const b = a;
console.log(b);

```

虽然在 TS 代码中，我们使用了非空断言，使得 const b: number = a!; 语句可以通过 TypeScript 类型检查器的检查。但在生成的 ES5 代码中，! 非空断言操作符被移除了，所以在浏览器中执行以上代码，在控制台会输出 undefined。


## 确定赋值断言

允许在实例属性和变量声明后面放置一个 ! 号，从而告诉 TypeScript 该属性会被明确地赋值


```
let x!: number;
initialize();
console.log(2 * x); // Ok 本来应该报错Error为变量赋值前被使用的

function initialize() {
  x = 10;
}

```