interface Alarm {
    price: number;
    weight: number;
}
interface Alarm2 {
    price: number;
}
interface Alarm2 {
    price: number;
    weight: number;
}
interface Alarm3 {
    price: number;
}
interface Alarm3 {
    price: string;
    weight: number;
}
interface Alarm {
    price: number;
    weight: number;
    alert(s: string): string;
    alert(s: string, n: number): string;
}
