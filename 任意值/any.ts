
//any 类型，则允许被赋值为任意类型
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

let anyThing: any = 'hello';
console.log(anyThing.myName);

let something:any;
something = 'seven';
something.x = 1
something.setName('Tom');

/* let something2; TODO:官方说法是与any等级，但在调试的时候any能加属性这个不能
something2 = 'seven';
something2.x = 2;
something2.setName('Tom'); */
