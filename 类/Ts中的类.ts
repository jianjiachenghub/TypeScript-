/**
 * TypeScript 中类的用法
 * 三种访问修饰符（Access Modifiers）
 * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 * 还有一种只读修饰符可与访问修饰符同时使用 readonly
 */
/* 共有属性*/
class Animal3 {
    public name:any; //TODO:为什么不加类型会报错： 成员“name”隐式包含类型“any”  不是会推断吗
    public name2='name2';
    public constructor(name:any) {
        this.name = name;
        //console.log(name2) 报错 要用this.name2
        //并且this调用的属性必须在上面声明
    }
}

let a3 = new Animal3('Jack');
console.log(a3.name); // Jack
a3.name = 'Tom';
console.log(a3.name); // Tom

/* 私有属性*/
class Animal4 {
    private name:any;
    public constructor(name:any) {
        this.name = name;
    }
}
let a4 = new Animal4('Jack');
console.log(a4.name); // Property 'name' is private and only accessible within class 'Animal'.
a4.name = 'Tom'; // Property 'name' is private and only accessible within class 'Animal'.



/* protected在子类中能访问而private不能 */
class Animal5 {
    protected name:any;
    private privateName=123;
    public publicName = 456
    public constructor(name:any) {
        this.name = name;
    }
}

class Cat5 extends Animal5 {
    constructor(name:any) {
        console.log(this.publicName)//访问派生类的构造函数中的 "this" 前，必须调用 "super" TODO:搞清楚编译后的 _this = _super.call(this, name) || this;
        super(name);
        console.log(this.publicName)
        console.log(this.name);
        console.log(this.privateName)//Property 'privateName' is private and only accessible within class 'Animal5'
    }
}

let a5 = new Cat5('Jack5');// console Jack5


/* 当构造函数修饰为 private 时，该类不允许被继承或者实例化 */
class Animal6 {
    public name:any;
    private constructor (name:any) {
        this.name = name;
  }
}
class Cat6 extends Animal6 {//Cannot extend a class 'Animal6'. Class constructor is marked as private.

    constructor (name:any) {
        super(name);
    }
}

let a6 = new Cat6('Jack');


/* 当构造函数修饰为 protected 时，该类只允许被继承 */
class Animal7 {
    public name:any;
    protected constructor (name:any) {
        this.name = name;
  }
}
class Cat7 extends Animal7 {
    constructor (name:any) {
        super(name);
    }
}

let a7 = new Animal7('Jack');// Constructor of class 'Animal7' is protected and only accessible within the class declaration


/* 修饰符还可以使用在构造函数参数中，等同于类中定义该属性(意思就是我上面猜的Ts类属性必须先声明是对的) */
class Animal8 {
    // public name: string;
    public constructor (public name:any) {
        this.name = name;
    }
}



/* readonly  */
//只读属性关键字，只允许出现在属性声明或索引签名中
//注意如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面
class Animal9 {
    // public readonly name;
    public constructor(public readonly name:any) {
        this.name = name;
    }
}