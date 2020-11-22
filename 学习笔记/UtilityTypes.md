## 条件类型 extends
>大多数的Utility type使用了extends来实现

extends 运用在 type 和 class 和接口 中时完全是两种作用的效果。条件类型是一种条件表达式进行类型的关系检测。

```
type A = 'x';
type B = 'x' | 'y';

type Y = A extends B ? true : false; // true
上面的类型意思是，若A能够赋值给B，那么类型是A，否则为B。

```

### 当联合类型无法做出判断时

假设我们传入不确定的值，例如一个联合类型 'x' | 'y' 会怎么样呢？判断逻辑可能是 true，也可能是 false。其实 TypeScript 也不知道该怎么办，于是乎它就把两个结果的值都返回给我们了：

```
type AB<T> = T extends 'x' ? 'a' : 'b';

type All = AB<'x' | 'y'>; // 非确定条件，因为是联合类型，可能是 'x' 或 'y' 。
// 得到 type All = 'a' | 'b';  T是x的时候为返回'a',y的时候返回'b'

```

我们得到了一个 联合类型 包含所有返回值的。

官方的解释是：此时做了 推迟解析条件类型 的处理。

### 推迟解析条件类型

 条件类型不确定时会返回所有的值 的特性情况下，会产生一些额外的效果。
 现在我们把传入的 T 类型也一起返回，有趣的事情就发生了。且放置 T 位置不同，产生的效果也不同：

```
type Other = "a" | "b";
type Merge<T> = T extends "x" ? T : Other; // T 等于匹配的类型，然后加上 Other 联合类型一起返回

type Values = Merge<"x" | "y">;
// 得到 type Values = "x" | "a" | "b";

```
因为联合类型会返回两种结果，不确定，所以TS会返回T和Other都可能,所以

- T = "x" 能赋值（extends）给 "x",返回"x"
- T = "y" 不能, 返回Other("a" | "b")
- Values = "x" | Other  =  "x" | "a" | "b";

推迟解析条件类型的额外效果,放置 T 位置不同，产生的效果也不同：
```
type Other = "a" | "b";
type Merge<T> = T extends "x" ? Other : T; // T 等于除匹配类型的额外所有类型（官方叫候选类型）

type Values = Merge<"x" | "y">;
// 得到 type Values = "a" | "b" | 'y';
```


## Utility Types


### Partial<T> - 可选的

让T中的属性所以变为可选，而不是必须
```
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

### Required - 必选的

与 Partial 相反，Required 将类型 T 的所有属性标记为必选属性

```
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```
### Pick<T, K> - 过滤

从 T 中过滤出属性 K
```
// 表明K的取值限制于T的下标 这里的extends是泛型约束的意思
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

### Exclude<T,U> - 排除

通过从T中排除所有可赋值给U的属性

```
type Exclude<T, U> = T extends U ? never : T;
```
上面已经讲过T是联合类型时，会导致推迟解析条件类型。T可能有很多种情况，返回就是多种情况的联合

```
type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c" (a的情况可以extends，但我返回的是never 无类型，就把a排除了. b c 都不可以extends 但是却返回本身
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
```

### Omit<T,K> - 忽略


通过从T中选择所有属性，然后删除K

```
// 结合Exclude和Pick实现
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

### Readonly<T>

将所有属性标记为 readonly, 即不能修改
```
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```


### 总结
```
​Omit<T, K>​ TypeScript 3.5 //让我们可以从一个对象类型中剔除某些属性，并创建一个新的对象类型
Partial<T>，TypeScript 2.1 // 将构造类型T所有的属性设置为可选的
Readonly<T>，TypeScript 2.1 // 将构造类型T所有的属性设置为只读的
Record<K,T>，TypeScript 2.1 // 可用来将某个类型的属性映射到另一个类型上
Pick<T,K>，TypeScript 2.1 // 从类型T中挑选部分属性K来构造类型
Exclude<T,U>，TypeScript 2.8 // 从类型T中剔除所有可以赋值给U的属性，然后构造一个类型
Extract<T,U>，TypeScript 2.8 // 从类型T中提取所有可以赋值给U的类型，然后构造一个类型
NonNullable<T>，TypeScript 2.8 // 从类型T中剔除null和undefined，然后构造一个类型
ReturnType<T>，TypeScript 2.8 // 由函数类型T的返回值类型构造一个类型
InstanceType<T>，TypeScript 2.8 // 由构造函数类型T的实例类型构造一个类型
Required<T>，TypeScript 2.8 // 构造一个类型，使类型T的所有属性为required必选
ThisType<T>，TypeScript 2.8 // 这个工具不会返回一个转换后的类型。它做为上下文的this类型的一个标记。注意，若想使用此类型，必须启用--noImplicitThis
```


