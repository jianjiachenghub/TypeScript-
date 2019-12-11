//一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到
function sum(x: number, y: number): number {
    return x + y;
}
//输入多余的（或者少于要求的）参数，是不被允许的
function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2, 3); // 报错
