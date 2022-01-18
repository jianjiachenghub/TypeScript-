/*接口可以继承接口*/

interface Alarm {
    alert():void;
}

interface LightableAlarm extends Alarm {
    lightOn():void;
    lightOff():void;
}

// 多继承：ts接口中可以继承多个接口，使用（，）号分隔  

interface InterfaceOne {
    //
    sports():void;
}
interface InterfaceTwo {
    //
    swimming():void
}
// 接口集成接口
interface InterfaceThree extends InterfaceOne,InterfaceTwo {
    //
    coding():void;
}


// 多实现：类对于接口的多实现

class SubCls implements InterfaceTwo, InterfaceOne {
    
    // 实现接口
    sports(){
        console.log('运动')
    }

    swimming(){
        console.log('游泳')
    }
}



/*接口可以继承类*/
// 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
/* 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 
就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
接口同样会继承到类的private和protected成员。 
这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
这个接口类型只能被这个类或其子类所实现（implement）。 */
class Control2 {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}
// Button从Control那里已经继承来了state不用实现
class Button2 extends Control implements SelectableControl {
    select() { }
}


