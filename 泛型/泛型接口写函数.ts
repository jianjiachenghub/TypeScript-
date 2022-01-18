/** 
 * 使用含有泛型的接口定义函数的形状
*/

interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc;
createArray = function <T>(length: number, value: T): Array<T>{
    let result:T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result; 
}

/**
 * 把泛型参数提到接口名上：
*/

interface CreateArrayFunc2<T> {
    (length: number, value: T): Array<T>;
}

let createArray2: CreateArrayFunc2<any>;
createArray2 = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
