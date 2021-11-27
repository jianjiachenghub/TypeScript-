## 装饰器

装饰器是什么
- 它是一个表达式
- 该表达式被执行后，返回一个函数
- 函数的入参分别为 target、name 和 descriptor
- 执行该函数后，可能返回 descriptor 对象，用于配置 target 对象

装饰器的分类
- 类装饰器（Class decorators）
- 属性装饰器（Property decorators）
- 方法装饰器（Method decorators）
- 参数装饰器（Parameter decorators）

## 装饰器作用

- 装饰器 不过是在设计时（design time）帮助内省代码，注解及修改类和属性的函数。
- 元信息反射 API 有助于以标准方式在对象中加入元信息，以及在运行时获取设计类型信息。
- 可以通过装饰器工厂将用户提供的参数传给装饰器。

## TypeScript 中的 Decorator


在 TypeScript 的源码中我们可以找到支持的 Decorator 类型的定义：

```ts
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
```

## 参数的含义

- target —— 当前对象的原型，也就是说，假设 Employee 是对象，那么 target 就是 Employee.prototype
- propertyKey —— 方法的名称
- descriptor —— 方法的属性描述符，即 Object.getOwnPropertyDescriptor(Employee.prototype, propertyKey)


## 实现源码

```ts
class C {
    @log
    foo(n: number) {
        return n * 2;
    }
}

```

ts编译很后:TypeScript 编译器将 C 类的 prototype、被注解函数的名称以及名为__decorate 的返回值作为参数传递给 defineProperty 函数。

TypeScript 借助 defineProperty 函数来重载被注解方法。

```ts
var C = (function () {
    function C() {
    }
    C.prototype.foo = function (n) {
        return n * 2;
    };
    Object.defineProperty(
      __decorate(
        [log],                                              // decorators
        C.prototype,                                        // target
        "foo",                                              // key
        Object.getOwnPropertyDescriptor(C.prototype, "foo") // desc
      );
    );
    return C;
})();
```