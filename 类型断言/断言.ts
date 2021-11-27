 // 联合类型讲到：当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getLength(something: string | number): number {
    return something.length;//   Property 'length' does not exist on type 'number'.
}



// 但有的时候我们又需要访问不确定类型的属性来判断
function getLength2(something: string | number): number {
    // 下面的代码肯定会报错，那我们怎么能方便的判断呢
    if (something.length) {
        return something.length;
    } else {
        return something.toString().length;
    }
} 

// 或者

function func(val: string | number): number {
  if ((val as string).length) {
    return (val as string).length
  } else {
    return val.toString().length
  }
}



function getLength3(something: string | number): number {
    // 这时就不会报错
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}



// 断言只是用来引导程序的正常执行，并不会改变原来的类型
function getLength4(something: string | number):string {
    // 这时就不会报错
    console.log((<string>something).length)
    //return something 这样写会报错，因为指定了返回类型为string
    return <string>something //这样写不会报错 相当于是欺骗编译程序，这里的something就为string类型，但本来的something并没有变
}
let x = getLength4(123)
console.log(x)// 123
console.log(typeof x)// 依然是number



// 注意：断言成一个联合类型中不存在的类型是不允许的
// 换句话说断言是在联合类型的时候使用 用于临时指定类型让程序继续运行下去
function toBoolean(something: string | number): boolean {
    return <boolean>something;
}

