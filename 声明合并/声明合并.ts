/* interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
} */
//相当于
interface Alarm {
    price: number;
    weight: number;
}


//合并的属性的类型必须是唯一的
interface Alarm2 {
    price: number;
}
interface Alarm2 {
    price: number;  // 虽然重复了，但是类型都是 `number`，所以不会报错
    weight: number;
}


interface Alarm3 {
    price: number;
}
interface Alarm3 {
    price: string;  // 类型不一致，会报错
    weight: number;
}



/* interface Alarm4 {
    price: number;
    alert(s: string): string;
}
interface Alarm4 {
    weight: number;
    alert(s: string, n: number): string;
} */
//相当于
interface Alarm {
    price: number;
    weight: number;
    alert(s: string): string;//重载
    alert(s: string, n: number): string;
}