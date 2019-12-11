function sum() {
    let args: number[] = arguments;// 报错
}
function sum2() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

//事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
function sum3() {
    let args: IArguments = arguments;
}

/* interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
} */