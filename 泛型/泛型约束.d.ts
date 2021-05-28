/**
 * 泛型约束
 * 相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。
 * 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。
 * 为此，我们需要列出对于T的约束要求,用extends关键字实现
 */
interface Lengthwise {
    length: number;
    name: string;
}
declare function copyFields<T extends U, U>(target: T, source: U): T;
declare let x9: {
    a: number;
    b: number;
    c: number;
    d: number;
};
