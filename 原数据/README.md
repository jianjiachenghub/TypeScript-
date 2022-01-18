## 什么是原数据

元数据 ：用来描述数据的数据，在我们的程序中，对象、类 等都是数据，它们描述了某种数据

另外还有一种数据，它可以用来描述 对象、类，这些用来描述数据的数据就是 元数据

比如一首歌曲本身就是一组数据，同时还有一组用来描述歌曲的歌手、格式、时长的数据，那么这组数据就是歌曲数据的元数据


在 装饰器 函数中 ，我们可以拿到 类、方法 、访问符、属性、参数 的基本信息，如它们的名称，描述符 等

但是我们想获取更多信息就需要通过另外的方式来进行：元数据

## Reflect反射原信息

Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与proxy handlers (en-US)的方法相同。Reflect不是一个函数对象，因此它是不可构造的。

### 定义元数据

我们可以 类、方法 等数据定义元数据

元数据会被附加到指定的 类、方法 等数据之上，但是又不会影响 类、方法 本身的代码

### 设置

Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey)

- metadataKey：meta 数据的 key
- metadataValue：meta 数据的 值
- target：meta 数据附加的目标
- propertyKey（可选）：对应的 property key
- 
### 获取

Reflect.getMetadata(metadataKey, target, propertyKey)、

```ts
class A {
    public static method1() {
    }

    public method2() {
    }
}

let obj = new A;

Reflect.defineMetadata("n", 1, A);
Reflect.defineMetadata("n", 2, A, "method1");
Reflect.defineMetadata("n", 3, obj);
Reflect.defineMetadata("n", 4, A, "method2");

console.log(Reflect.getMetadata("n", A));
console.log(Reflect.getMetadata("n", A, "method1"))
console.log(Reflect.getMetadata("n", obj))
console.log(Reflect.getMetadata("n", obj, "method2"))
```

### 和修饰器结合使用简化操作

```ts
@Reflect.metadata('inClass', 'A')
class Test {
  @Reflect.metadata('inMethod', 'B')
  public hello(): string {
    return 'hello world';
  }
}

console.log(Reflect.getMetadata('inClass', Test)); // 'A'
console.log(Reflect.getMetadata('inMethod', new Test(), 'hello')); // 'B'
```

```ts
// 参数装饰器使用反射 api 存储被装饰参数的索引
export function logParameter(target: Object, propertyName: string, index: number) {
    // 获取目标对象的元信息
    const indices = Reflect.getMetadata(`log_${propertyName}_parameters`, target, propertyName) || [];
    indices.push(index);
    // 定义目标对象的元信息
    Reflect.defineMetadata(`log_${propertyName}_parameters`, indices, target, propertyName);
}

// 属性装饰器使用反射 api 获取属性的运行时类型
export function logProperty(target: Object, propertyName: string): void {
    // 获取对象属性的设计类型
    var t = Reflect.getMetadata("design:type", target, propertyName);
    console.log(`${propertyName} type: ${t.name}`); // name type: String
}


class Employee {
    @logProperty
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    greet(@logParameter message: string): string {
        return `${this.name} says: ${message}`;
    }
}
```


上面的代码用到了 reflect-metadata 这个库。其中，我们使用了反射元信息的设计键（例如：design:type）。目前只有三个：

- 类型元信息用了元信息键 design:type。
- 参数类型元信息用了元信息键 design:paramtypes。
- 返回类型元信息用了元信息键 design:returntype。

有了反射，我们就能够在运行时得到以下信息：

- 实体名。
- 实体类型。
- 实体实现的接口。
- 实体构造器参数的名称和类型。
