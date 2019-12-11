// 设置了返回值函数不能有没有返回的情况
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string  { // TODO: 这里报错 与文档说法不一致 return type does not include 'undefined'
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}