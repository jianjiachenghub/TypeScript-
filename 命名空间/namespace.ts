//帅哥也有叫德华的，二师兄也有叫德华的。那我们要如何区分那。这对于女孩子选老公来说非常重要啊。
//命名空间，又称内部模块，被用于组织有些具有内在联系的特性和对象
//内部使用立即执行的函数来模块化
namespace shuaiGe{
    export class Dehua{
        public name:string = '刘德华'
        talk(){
            console.log('我是帅哥刘德华')
        }
    }
}

namespace bajie{
    export class Dehua{
        public name:string = '马德华'
        talk(){
            console.log('我是二师兄马德华')
        }
    }
}

let dehua1:shuaiGe.Dehua   = new shuaiGe.Dehua()
let dehua2:shuaiGe.Dehua   = new bajie.Dehua()
dehua1.talk()


let x: number = 1;
const y = x * 2;
export {x, y}