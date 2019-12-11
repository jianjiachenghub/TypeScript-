interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;//任意属性的键类型为string：值类型为任意
}

let tom3: Person3 = {
    name: 'Tom',
    gender: 'male',
    age:23
};

interface Person4 {
    name: string;
    age?: number;
    [propName: number]: string;//任意属性的键类型为string：值类型为任意
}

let tom4: Person4 = {
    name: 'Tom',//本来声明的不受影响
    123: 'male',
    //test: 'male',//test不是number 不在类型中
    456: 789,//789不是string 无法赋值给456 报错
    age:123
};
