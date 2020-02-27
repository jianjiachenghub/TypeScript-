/**
 * 泛型（Generics）
 * 泛型就是指定一个表示类型的变量，用它来代替某个实际的类型用于编程，
 * 而后通过实际调用时传入或推导的类型来对其进行替换，
 * 以达到一段使用泛型程序可以实际适应不同类型的目的。
 */
declare function identity<T>(arg: T): T;
declare let output: string;
declare let output2: number;
declare let output3: number[];
declare let output4: number[];
declare function loggingIdentity3<T>(arg: Array<T>): Array<T>;
declare function createArray<T = string>(length: number, value: T): Array<T>;
