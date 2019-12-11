interface Person5 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

// 对象赋值
let tom5: Person5 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

// 属性赋值
tom5.id = 9527;// 报错

//只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

interface Person6 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom6: Person6 = {
    name: 'Tom',
    gender: 'male'
};

tom6.id = 89757;
