/**
 * abstract 用于定义抽象类和其中的抽象方法
 * 抽象类是不允许被实例化：意思就是只能用来继承
 * 抽象类中的抽象方法必须被子类实现
 * 抽象方法只能出现在抽象类中
 */
declare abstract class Person {
    protected name: string;
    constructor(name: string);
    abstract getElevatorPitch(): void;
}
declare class Employee extends Person {
    private department;
    constructor(name: string, department: string);
    getElevatorPitch(): string;
}
declare let howard: Employee;
