## 模块

从 ECMAScript 2015 开始，JavaScript 引入了模块的概念。TypeScript 也沿用这个概念。

模块在其自身的作用域里执行，而不是在全局作用域里；这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用export 形式之一导出它们。 相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用import 形式之一。

模块是自声明的；两个模块之间的关系是通过在文件级别上使用 imports 和 exports 建立的。

模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。 众所周知的 JavaScript 模块加载器有：作用于 CommonJS (opens new window)模块的 Node.js 加载器和在 Web 应用里作用于 AMD (opens new window)模块的 RequireJS (opens new window)加载器。

TypeScript 与 ECMAScript 2015 一样，任何包含顶级 import 或者 export 的文件都被当成一个模块。 相反地，如果一个文件不带有顶级的 import 或者 export 声明，那么它的内容被视为全局可见的（因此对模块也是可见的）。
## 全局模块

在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中。如在 foo.ts 里的以下代码。

```ts
const foo = 123;
```

如果你在相同的项目里创建了一个新的文件 bar.ts，TypeScript 类型系统将会允许你使用变量 foo，就好像它在全局可用一样：

```ts
const bar = foo; // allowed
```

毋庸置疑，使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块。\

## 文件模块

文件模块也被称为外部模块。如果在你的 TypeScript 文件的根级别位置含有 import 或者 export，那么它会在这个文件中创建一个本地的作用域。因此，我们需要把上文 foo.ts 改成如下方式（注意 export 用法）：

```ts
export const foo = 123;
```

在全局命名空间里，我们不再有 foo，这可以通过创建一个新文件 bar.ts 来证明：

```ts
const bar = foo; // ERROR: "cannot find name 'foo'"
```

如果你想在 bar.ts 里使用来自 foo.ts 的内容，你必须显式地导入它，更新后的 bar.ts 如下所示。

```ts
import { foo } from "./foo";
const bar = foo; // allow
```

在 bar.ts 文件里使用 import 时，它不仅允许你使用从其他文件导入的内容，还会将此文件 bar.ts 标记为一个模块，文件内定义的声明也不会“污染”全局命名空间

### 模块解析策略

共有两种可用的模块解析策略：Node 和 Classic。

你可以使用 --moduleResolution 标记来指定使用哪种模块解析策略。若未指定，那么在使用了 --module AMD | System | ES2015 时的默认值为 Classic，其它情况时则为 Node。

## 导入一个相对路径

这里讨论没有后缀名的情况,有后缀就只走第一步

### TS

```
import { b } from "./moduleB"
```

- .tsx
- .d.ts
- package 的 types 指定的路径

```
/root/src/moduleB.ts
/root/src/moduleB.tsx
/root/src/moduleB.d.ts
/root/src/moduleB/package.json (如果指定了"types"属性)
/root/src/moduleB/index.ts
/root/src/moduleB/index.tsx
/root/src/moduleB/index.d.ts
```

### Node

- js
- package 的 main 指定的路径

```
/root/src/moduleB.js
/root/src/moduleB/package.json (如果有main则去面的地址)
/root/src/moduleB/index.js
```

## 导入一个绝对路径 Ts 和 Node 不同

相对导入在解析时是相对于导入它的文件，并且不能解析为一个外部模块声明。 你应该为你自己写的模块使用相对导入，这样能确保它们在运行时的相对位置。

```js
import Entry from "./components/Entry";
import { DefaultHeaders } from "../constants/http";
import "/mod";
```

非相对模块的导入可以相对于 baseUrl 或通过下文会讲到的路径映射来进行解析。

```
import * as $ from "jquery";
import { Component } from "@angular/core";

```

### Ts 默认使用 classic 方式导入绝对路径

这种策略在以前是 TypeScript 默认的解析策略。 现在，它存在的理由主要是为了向后兼容。

有一个对 moduleB 的非相对导入 import { b } from "moduleB"，它是在/root/src/folder/A.ts 文件里，会以如下的方式来定位"moduleB"

```js
/root/src/folder/moduleB.ts
/root/src/folder/moduleB.d.ts
/root/src/moduleB.ts
/root/src/moduleB.d.ts
/root/moduleB.ts
/root/moduleB.d.ts
/moduleB.ts
/moduleB.d.ts
Node #
```

### Node 则是基于 require 的

Node.js 会根据 require 的是相对路径还是非相对路径做出不同的行为。相对路径很简单,和 TS 一致。

非相对模块名的解析是个完全不同的过程。 Node 会在一个特殊的文件夹 node_modules 里查找你的模块。 node_modules 可能与当前文件在同一级目录下，或者在上层目录里。 Node 会向上级目录遍历，查找每个 node_modules 直到它找到要加载的模块。

假设/root/src/moduleA.js 里使用的是非相对路径导入 var x = require("moduleB");。 Node 则会以下面的顺序去解析 moduleB，直到有一个匹配上。

```
/root/src/node_modules/moduleB.js
/root/src/node_modules/moduleB/package.json (如果指定了"main"属性)
/root/src/node_modules/moduleB/index.js

/root/node_modules/moduleB.js
/root/node_modules/moduleB/package.json (如果指定了"main"属性)
/root/node_modules/moduleB/index.js

/node_modules/moduleB.js
/node_modules/moduleB/package.json (如果指定了"main"属性)
/node_modules/moduleB/index.js
```

## TypeScript 的 Node 解析模式

TypeScript 是模仿 Node.js 运行时的解析策略来在编译阶段定位模块定义文件。 因此，TypeScript 在 Node 解析逻辑基础上增加了 TypeScript 源文件的扩展名（ .ts，.tsx 和.d.ts）。 同时，TypeScript 在 package.json 里使用字段"types"来表示类似"main"的意义 - 编译器会使用它来找到要使用的"main"定义文件。

文件里的 import { b } from "moduleB"会以下面的查找顺序解析：

```
/root/src/node_modules/moduleB.ts
/root/src/node_modules/moduleB.tsx
/root/src/node_modules/moduleB.d.ts
/root/src/node_modules/moduleB/package.json (如果指定了"types"属性)
/root/src/node_modules/moduleB/index.ts
/root/src/node_modules/moduleB/index.tsx
/root/src/node_modules/moduleB/index.d.ts

/root/node_modules/moduleB.ts
/root/node_modules/moduleB.tsx
/root/node_modules/moduleB.d.ts
/root/node_modules/moduleB/package.json (如果指定了"types"属性)
/root/node_modules/moduleB/index.ts
/root/node_modules/moduleB/index.tsx
/root/node_modules/moduleB/index.d.ts

/node_modules/moduleB.ts
/node_modules/moduleB.tsx
/node_modules/moduleB.d.ts
/node_modules/moduleB/package.json (如果指定了"types"属性)
/node_modules/moduleB/index.ts
/node_modules/moduleB/index.tsx
/node_modules/moduleB/index.d.ts
```

## 如何让 Ts 导出支持从 node_modules 找--配置编译策略

```
{
  "compilerOptions": {
    "outDir": "dist",
    "module": "esnext",
    "target": "es5",
    "declaration": true,
    "jsx": "react",
    "moduleResolution":"Node", // 采用node的方式导出模块 而不是classic
    "allowSyntheticDefaultImports": true, // 支持默认导出
  },
  "include": [
    "src"
  ],
  "exclude": [
    "src/**/*.test.tsx",
    "src/**/*.stories.tsx",
    "src/setupTests.ts",
  ]
}
```

```
import react from 'react'
```

ts 如何默认导出：编译时需要配置

## 为什么可以从 React 中即导出变量也导出泛型

React 包导出来里面全是 JS，但是为什么可以用`React.FC<MenuItemProps>`这种泛型。

感觉是从 React 里没找到，然后 index.d.ts 有的话就从里面导入，如果没有就往 package 的 types 字段去找
这是 React 的模块的 package

```json
{
  "scripts": {},
  "typeScriptVersion": "2.8",
  "types": "index.d.ts",
  "typesPublisherContentHash": "654e5d9e60861e319651ceb31b89ec3d5fceb31132e9d18ea5c857026eb4cf2b",
  "version": "16.9.34"
}
```
