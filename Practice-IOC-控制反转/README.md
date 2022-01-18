## TypeScript 实现控制反转

按照维基百科，IoC（Inversion of Control）控制反转，是面向对象编程中的一种设计原则，用来降低计算机代码之间的耦合度。
在传统面向对象的编码过程中，当类与类之间存在依赖关系时，通常会直接在类的内部创建依赖对象，这样就导致类与类之间形成了耦合，依赖关系越复杂，耦合程度就会越高，而耦合度高的代码会非常难以进行修改和单元测试。而 IoC 则是专门提供一个容器进行依赖对象的创建和查找，将对依赖对象的控制权由类内部交到容器这里，这样就实现了类与类的解耦，保证所有的类都是可以灵活修改。

## 耦合

A 依赖 B , 如果某天B改为需要穿参数，那么所以依赖B的类（比如A），都需要从新改为new B(p)
```TS
// b.ts
class B {
    constructor() {
    }
}

// a.ts
class A {
    b:B;
    constructor() {
        this.b = new B();
    }
}

// main.ts
const a = new A();

```

## 解耦

真正需要参数 p 的仅仅只有 B，而 A 完全只是因为内部依赖的对象在实例化时需要 p，才不得不定义这个参数，实际上它对 p 是什么根本不关心。于是，我们可以考虑将类所依赖对象的实例化从类本身剥离出来

```TS
// b.ts
class B {
    p: number;
    constructor(p: number) {
        this.p = p;
    }
}

// a.ts
class A {
    private b:B;
    constructor(b: B) {
        this.b = b;
    }
}

// main.ts
const b = new B(10);
const a = new A(b);
console.log(a); // A => { b: B { p: 10 } }

```

## 容器 Container 

实现了解耦，但我们仍需要自己初始化所有的类，并以构造函数参数的形式进行传递。

如果存在一个全局的容器，里面预先注册好了我们所需对象的类定义以及初始化参数，每个对象有一个唯一的 key。
那么当我们需要用到某个对象时，我们只需要告诉容器它对应的 key，就可以直接从容器中取出实例化好的对象，开发者就不用再关心对象的实例化过程，也不需要将依赖对象作为构造函数的参数在依赖链路上传递。

实例的注册和获取，这很容易让人联想到 Map，基于这个思路，我们首先简单实现一个容器：

```TS
// container.ts
export class Container {
    bindMap = new Map();

    // 实例的注册
    bind(identifier: string, clazz: any, constructorArgs: Array<any>) {
        this.bindMap.set(identifier, {
            clazz,
            constructorArgs
        });
    }

    // 实例的获取
    get<T>(identifier: string): T {
        const target = this.bindMap.get(identifier);
        const { clazz, constructorArgs } = target;
        const inst = Reflect.construct(clazz, constructorArgs); // 这里我们用到了 Reflect.construct，它的行为有点像 new 操作符，帮助我们进行对象的实例化。
    }
}

```

其实已经基本实现了 IoC，基于容器完成了类与类的解耦。
```TS
// b.ts
class B {
    constructor(p: number) {
        this.p = p;
    }
}

// a.ts
class A {
    b:B;
    constructor() {
        this.b = container.get('b');
    }
}

// main.ts
const container = new Container();
container.bind('a', A);
container.bind('b', B, [10]);

// 从容器中取出a
const a = container.get('a');
console.log(a); // A => { b: B { p: 10 } }

```

## DI（Dependency Injection）依赖注入。

但从代码量上看似乎并没有简洁多少，关键问题在于容器的初始化以及类的注册仍然让我们觉得繁琐，如果这部分代码能被封装到框架里面，所有类的注册都能够自动进行，同时，所有类在实例化的时候可以直接拿到依赖对象的实例，而不用在构造函数中手动指定，这样就可以彻底解放开发者的双手，专注编写类内部的逻辑，而这也就是所谓的 DI（Dependency Injection）依赖注入。


它的思路就是在对象创建时自动注入依赖对象
```TS
// provide意为当前对象需要被绑定到容器中
// inject意为去容器中取出对应的实例注入到当前属性中
@provide()
export class UserService {
 
  @inject()
  userModel;

  async getUser(userId) {
    return await this.userModel.get(userId);
  }
}

```

###  Reflect Metadata

要使用装饰器解决上述提到的两个问题，我们需要先简单了解下 Reflect Metadata。Reflect Metadata 是 ES7 的一个提案，它主要用来在声明的时候添加和读取元数据

### 元数据

元数据可以理解为针对类或类里面某个属性的描述信息，它本身不影响类的行为，但你可以在随时拿到某个类上定义的元数据，并根据这些元数据进行对类进行特定的操作。


### 结合修饰器封装Provider

有了 Reflect，我们就可以对任意类进行标记，并对标记的类进行特殊的处理。结合修饰器语法
```TS
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```

封装函数，我们先来实现一个装饰器标记需要注册的类，这个装饰器可以命名 Provider，代表它将会作为提供者给其他类进行消费。

```TS
// provider.ts
import 'reflect-metadata'

export const CLASS_KEY = 'ioc:tagged_class';

export function Provider(identifier: string, args?: Array<any>) {
    return function (target: any) {
        Reflect.defineMetadata(CLASS_KEY, {
            id: identifier,
            args: args || []
        }, target);
        return target;
    };
}


```

id 是我们准备用来注册 IoC 容器的 key，而 args 则是实例初始化时需要的参数
```TS
// b.ts
import { Provider } from 'provider';

@Provider('b', [10])
export class B {
    constructor(p: number) {
        this.p = p;
    }
}

```

如果在应用启动的时候拿到这些类的定义呢？

比较容易想到的思路是在启动的时候对所有文件进行扫描，获取每个文件导出的类，然后根据元数据进行绑定。简单起见，我们假设项目目录只有一级文件，实现如下：

```TS
// load.ts
import * as fs from 'fs';
import { CLASS_KEY } from './provider';

export function load(container) { // container 为全局的 IoC 容器
  const list = fs.readdirSync('./');

  for (const file of list) {
    if (/\.ts$/.test(file)) { // 扫描 ts 文件
      const exports = require(`./${file}`);
      for (const m in exports) {
        const module = exports[m];
        if (typeof module === 'function') {
          const metadata = Reflect.getMetadata(CLASS_KEY, module);
          // 注册实例
          if (metadata) {
            container.bind(metadata.id, module, metadata.args)
          }
        }
      }
    }
  }
}


import { Container } from './container';
import { load } from './load';

// 初始化 IOC 容器，扫描文件
const container = new Container();
load(container);

console.log(container.get('a')); // A => { b: B { p: 10 } }

```

### Inject

如何在类初始化的时候能直接拿到它所依赖的对象的实例，而不需要手动通过构造函数进行传参。

其实思路也很简单，我们已经将所有需要注册的类都放入了 IoC 容器，那么，当我们需要用到某个类时，在获取这个类的实例时可以递归遍历类上的属性，并从 IoC 容器中取出相应的对象并进行赋值，即可完成依赖的注入。


是类似的问题，如何区分哪些属性需要注入？同样，我们可以使用元数据来解决。只要定义一个装饰器，以此来标记哪些属性需要注入即可，这个装饰器命名为 Inject，代表该属性需要注入依赖。

```TS
// inject.ts
import 'reflect-metadata';

export const PROPS_KEY = 'ioc:inject_props';

export function Inject() {
    return function (target: any, targetKey: string) {
      // 虽然是对属性进行修饰，但实际元数据是要定义在类上，以维护该类需要注入的属性列表
      // 因此我们必须取 target.constructor 作为要操作的 target。
      // 另外，为了方便起见，这里直接用了属性名（targetKey）作为从 IoC 容器中实例对应的 key。
        const annotationTarget = target.constructor; // target 本来是原型 Prototype 现在去取类

        let props = {};
        if (Reflect.hasOwnMetadata(PROPS_KEY, annotationTarget)) {
            props = Reflect.getMetadata(PROPS_KEY, annotationTarget);
        }

        props[targetKey] = {
            value: targetKey
        };
        // 类似于每个Inject属性的那个类上都一个ioc:inject_props对象，这个对象里存了一张所有需要注入的属性表
        Reflect.defineMetadata(PROPS_KEY, props, annotationTarget);
    };
}

```

### Container 修改

修改 IoC 容器的 get 方法，递归注入所有属性：

**inst[ prop ] = this.get(identifier);**这里是关键，所有类的调用其实是在实例化后的，这inst就是用 Reflect.construct创建的实例，然后在实例上改写依赖注入的属性

```TS
// container.ts
import { PROPS_KEY } from './inject';

export class Container {
    bindMap = new Map();

    bind(identifier: string, clazz: any, constructorArgs?: Array<any>) {
        this.bindMap.set(identifier, {
            clazz,
            constructorArgs: constructorArgs || []
        });
    }

    get<T>(identifier: string): T {
        const target = this.bindMap.get(identifier);

        const { clazz, constructorArgs } = target;

        const props = Reflect.getMetadata(PROPS_KEY, clazz);
        const inst = Reflect.construct(clazz, constructorArgs);
        
        for (let prop in props) {
            const identifier = props[prop].value;
            // 递归获取注入的对象
            inst[ prop ] = this.get(identifier);

        }
        return inst;
    }
}


```

## 最终代码


```TS
// b.ts
@Proivder('b', [10])
class B {
    constructor(p: number) {
        this.p = p;
    }
}

// a.ts
@Proivder('a')
class A {
    // 上面的Proivder('b')是被container收集了并以b为key
    // 这里经过Inject修饰后，Proivder会在元数据上多一个ioc:inject_props属性来描述注入的属性列表
    // 这时还只是声明而已，并没有把b替换为实例化的对象，实例化是在load和container函数中代理的
    @Inject()
    private b:B; 
}

// main.ts
const container = new Container();
load(container);

console.log(container.get('a'));  // => A { b: B { p: 10 } }

```

可以看到，代码中不会再有手动进行实例化的情况，无论要注册多少个类，框架层都可以自动处理好一切，并在这些类实例化的时候注入需要的属性。所有类可提供的实例都由类自身来维护，即使存在修改也不需要改动其他文件。

## 参考

https://juejin.cn/post/6898882861277904910#heading-8