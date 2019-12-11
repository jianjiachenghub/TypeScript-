let unionType: string | number;
unionType = 'seven';
unionType = 7;
unionType = true//报错

// 访问联合类型的属性或方法
function getLength(something: string | number): number {
    return something.length;//联合属性，如果是number就是没有length属性，报错
    //return something.toString(); 都有toString()方法可以
}

let unionType2: string | number;
unionType2 = 'seven';
console.log(unionType2.length); // 5
unionType2 = 7;
console.log(unionType2.length); // 编译时报错