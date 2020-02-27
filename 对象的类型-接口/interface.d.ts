/**
 * 在 TypeScript 中,使用接口（Interfaces）来定义对象的类型
 * 它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。在类与接口的部分详细解释
 * 除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
 * 这里介绍「对象的形状（Shape）」进行描述
 */
interface Person {
    name: string;
    age: number;
}
declare let tom: Person;
