/**
 * 实现（implements）
 * 一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，
 * 这时候就可以把特性提取成接口（interfaces），
 * 用 implements 关键字来实现。
 * 这个特性大大提高了面向对象的灵活性。
 * 一个类可以实现多个接口
 * 接口可以继承接口
 * 接口也可以继承继承类
 * 类类型说的就是类这个类型的数据结构
 */
interface Alarm {
    alert(): void;
}
declare class Door {
}
declare class SecurityDoor extends Door implements Alarm {
    alert(): void;
}
declare class Car implements Alarm {
    alert(): void;
}
interface Alarm {
    alert(): void;
}
interface Light {
    lightOn(): void;
    lightOff(): void;
}
declare class Car2 implements Alarm, Light {
    alert(): void;
    lightOn(): void;
    lightOff(): void;
}
interface Alarm {
    alert(): void;
}
interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}
declare class Control {
    private state;
}
interface SelectableControl extends Control {
    select(): void;
}
declare class Button extends Control implements SelectableControl {
    select(): void;
}
declare class Image implements SelectableControl {
    select(): void;
}
