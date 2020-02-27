/**
 * TypeScript 中类的用法
 * 三种访问修饰符（Access Modifiers）
 * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 * 还有一种只读修饰符可与访问修饰符同时使用 readonly
 */
declare class Animal3 {
    name: any;
    name2: string;
    constructor(name: any);
}
declare let a3: Animal3;
declare class Animal4 {
    private name;
    constructor(name: any);
}
declare let a4: Animal4;
declare class Animal5 {
    protected name: any;
    private privateName;
    publicName: number;
    constructor(name: any);
}
declare class Cat5 extends Animal5 {
    constructor(name: any);
}
declare let a5: Cat5;
declare class Animal6 {
    name: any;
    private constructor();
}
declare class Cat6 extends Animal6 {
    constructor(name: any);
}
declare let a6: Cat6;
declare class Animal7 {
    name: any;
    protected constructor(name: any);
}
declare class Cat7 extends Animal7 {
    constructor(name: any);
}
declare let a7: any;
declare class Animal8 {
    name: any;
    constructor(name: any);
}
declare class Animal9 {
    readonly name: any;
    constructor(name: any);
}
