/*常数枚举*/
//常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
//编译结果 var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
//并且原来的Directions在生成的js中没有了
const enum Color3 {Red, Green, Blue = "blue".length};// error TS2474: In 'const' enum declarations member initializer must be constant expression.



/*外部枚举*/
//declare 定义的类型只会用于编译时的检查，编译结果中会被删除
//同时和外部枚举使用不会冲突
declare enum Directions2 {
    Up,
    Down,
    Left,
    Right
}
let directions2 = [Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right];