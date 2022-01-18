/**
 * 泛型类型
 * 泛型函数的类型与非泛型函数的类型没什么不同，只是声明类型的时候有一个类型参数在最前面
 * 泛型接口和泛型函数类似
 */
declare function identity2<T>(arg: T): T;
declare let myIdentity: <T>(arg: T) => T;
declare let myIdentity2: {
    <T>(arg: T): T;
};
interface GenericIdentityFn {
    <T>(arg: T): T;
}
declare function identity3<T>(arg: T): T;
declare let myIdentity3: GenericIdentityFn;
declare let x0: number;
declare let x1: number;
declare let x2: any;
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
declare function identity4<T>(arg: T): T;
declare let myIdentity4: GenericIdentityFn2<number>;
declare class GenericNumber<T> {
    zeroValue?: T;
    add?: (x: T, y: T) => T;
}
declare let myGenericNumber: GenericNumber<number>;
declare function create<T>(c: {
    new (): T;
}): T;
