/**
 * 泛型（Generics）
 * 泛型就是指定一个表示类型的变量，用它来代替某个实际的类型用于编程，
 * 而后通过实际调用时传入或推导的类型来对其进行替换，
 * 以达到一段使用泛型程序可以实际适应不同类型的目的。
 */


/* 
 * 给identity添加了类型变量T。 
 * T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 
 * 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的
 * 把这个版本的identity函数叫做泛型，因为它可以适用于多个类型
 * 不同于使用 any，它不会丢失信息，保持准确性，传入数值类型并返回数值类型
*/
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString"); 
let output2 = identity<number>(123);
let output3 = identity<Array<number>>([1,123]);// number[] == Array<number>
let output4 = identity([1,123]);//推断类型 function identity<number[]>(arg: number[]): number[]


/* 
 * 类型变量代表的是任意类型
 * 所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的 
 * 所以需要泛型约束 具体看另一个extends的写法
 */
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}



/*
 * 泛型函数loggingIdentity，接收类型参数T，和函数arg，
 * 它是个元素类型是T的数组，并返回元素类型是T的数组。    
 * 把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。
*/
function loggingIdentity2<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
//上面和下面写法不同但作用等价
function loggingIdentity3<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

//TypeScript 2.3 后 泛型中的类型参数指定默认类型
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}


/**
 * 3 泛型函数接口
 */
interface ConfigFn {
    <T>(value: T): T;
}
 
var ConfigFnImpl = function <T>(value: T): T {
    return value;
}
 
var getData: ConfigFn = ConfigFnImpl
 
getData<string>('张三');