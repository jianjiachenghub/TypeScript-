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
// 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
/* 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 
就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
接口同样会继承到类的private和protected成员。 
这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
这个接口类型只能被这个类或其子类所实现（implement）。 */
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

 

