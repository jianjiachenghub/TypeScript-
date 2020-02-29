// 数组的项中不允许出现其他的类型
let fibonacci: number[] = [1, 1, 2, 3, 5];

let fibonacci2: number[] = [1, 1, 2, 3, 5];
fibonacci2.push('8');//报错

//用 any 表示数组中允许出现任意类型
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
let list2:Array<number> = [1,2]
