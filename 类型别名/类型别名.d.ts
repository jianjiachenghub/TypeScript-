declare type Name = string;
declare type NameOrResolver = Name;
declare function getName(n: NameOrResolver): Name;
declare type sumFunType = (x: number, y: number) => number;
declare let sumFun: sumFunType;
declare let sumFun2: sumFunType;
declare type EventNames = 'click' | 'scroll' | 'mousemove';
declare function handleEvent(ele: Element | null, event: EventNames): void;
declare type jian = {
    name: string;
    age: number;
    hi: number;
};
declare let jianx: jian;
