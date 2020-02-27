interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;
}
declare let tom3: Person3;
interface Person4 {
    name: string;
    age?: number;
    [propName: number]: string;
}
declare let tom4: Person4;
