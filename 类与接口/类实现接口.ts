/**
 * 实现（implements）
 * 一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，
 * 这时候就可以把特性提取成接口（interfaces），
 * 用 implements 关键字来实现。
 * 这个特性大大提高了面向对象的灵活性。
 * 一个类可以实现多个接口
 * 接口可以继承接口
 * 接口也可以继承继承类
 */


/* 
举例来说，门是一个类，防盗门是门的子类。
如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它： 
*/
interface Alarm {
    alert():void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}


/*一个类可以实现多个接口*/
interface Alarm {
    alert():void;
}

interface Light {
    lightOn():void;
    lightOff():void;
}

class Car2 implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}



/*接口可以继承接口*/
interface Alarm {
    alert():void;
}

interface LightableAlarm extends Alarm {
    lightOn():void;
    lightOff():void;
}


/*接口可以继承类*/
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}
// Button从Control那里已经继承来了state不用实现
class Button extends Control implements SelectableControl {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

 

