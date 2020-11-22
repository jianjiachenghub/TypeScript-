/**
 * 元组
 * 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
 * 元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。
 */
let tom2: [string, number] = ['Tom', 25];


/* let tom7: [string, number]; // TODO:与文档说法不一致
tom7[0] = 'Tom';
tom7[1] = 25;
tom7[0].slice(1);
tom7[1].toFixed(2); */


////当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
let tom8: [string, number];
tom8 = ['Tom', 25];
tom8.push('male');
tom8.push(12);
tom8.push(true);// 报错 