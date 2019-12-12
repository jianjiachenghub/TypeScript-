/**
 * abstract 用于定义抽象类和其中的抽象方法
 * 抽象类是不允许被实例化：意思就是只能用来继承
 * 抽象类中的抽象方法必须被子类实现
 * 抽象方法只能出现在抽象类中
 */
abstract class Person {
    protected name: string; // 这里提示“name”的所有声明必须具有相同的修饰符但能运行
    constructor(name: string) { this.name = name; }
    public abstract getElevatorPitch():void
}

class Employee extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
// let person1 = new Person("Jian") // 无法创建抽象类的实例。
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());

