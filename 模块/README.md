
### 模块解析策略

共有两种可用的模块解析策略：Node和Classic。 

你可以使用 --moduleResolution标记来指定使用哪种模块解析策略。若未指定，那么在使用了 --module AMD | System | ES2015时的默认值为Classic，其它情况时则为Node。

## 导入一个相对路径 

这里讨论没有后缀名的情况,有后缀就只走第一步

### TS

```
import { b } from "./moduleB"
```
- .tsx
- .d.ts
- package的types指定的路径
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
- package的main指定的路径

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

非相对模块的导入可以相对于baseUrl或通过下文会讲到的路径映射来进行解析。

```
import * as $ from "jquery";
import { Component } from "@angular/core";

```

### Ts 默认使用classic 方式导入绝对路径

这种策略在以前是TypeScript默认的解析策略。 现在，它存在的理由主要是为了向后兼容。


有一个对moduleB的非相对导入import { b } from "moduleB"，它是在/root/src/folder/A.ts文件里，会以如下的方式来定位"moduleB"
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


### Node 则是基于require的

Node.js会根据 require的是相对路径还是非相对路径做出不同的行为。相对路径很简单,和TS一致。

非相对模块名的解析是个完全不同的过程。 Node会在一个特殊的文件夹 node_modules里查找你的模块。 node_modules可能与当前文件在同一级目录下，或者在上层目录里。 Node会向上级目录遍历，查找每个 node_modules直到它找到要加载的模块。

假设/root/src/moduleA.js里使用的是非相对路径导入var x = require("moduleB");。 Node则会以下面的顺序去解析 moduleB，直到有一个匹配上。
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

## TypeScript 的 Node解析模式


TypeScript是模仿Node.js运行时的解析策略来在编译阶段定位模块定义文件。 因此，TypeScript在Node解析逻辑基础上增加了TypeScript源文件的扩展名（ .ts，.tsx和.d.ts）。 同时，TypeScript在 package.json里使用字段"types"来表示类似"main"的意义 - 编译器会使用它来找到要使用的"main"定义文件。


文件里的import { b } from "moduleB"会以下面的查找顺序解析：
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

## 如何让Ts导出支持从node_modules找--配置编译策略

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

ts如何默认导出：编译时需要配置

## 为什么可以从React中即导出变量也导出泛型

React包导出来里面全是JS，但是为什么可以用`React.FC<MenuItemProps>`这种泛型。

感觉是从React里没找到，然后index.d.ts有的话就从里面导入，如果没有就往package的types字段去找
这是React的模块的package
```json
{
  "scripts": {},
  "typeScriptVersion": "2.8",
  "types": "index.d.ts",
  "typesPublisherContentHash": "654e5d9e60861e319651ceb31b89ec3d5fceb31132e9d18ea5c857026eb4cf2b",
  "version": "16.9.34"
}
```

