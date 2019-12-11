// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
/* 什么是接口
在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。 */
interface Person {
    name: string;
    age: number;
}
//tom 的形状必须和接口 Person 一致
let tom: Person = {
    name: 'Tom',
    age: 25
};