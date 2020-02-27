/**
 * ES6的写法编译会报错
 */
declare class Animal {
    constructor(name: any);
    sayHi(): string;
}
declare let a: Animal;
declare class Cat extends Animal {
    constructor(name: any);
    sayHi(): string;
}
declare let c: Cat;
