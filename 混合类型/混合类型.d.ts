interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
declare function getCounter(): Counter;
declare let c1: Counter;
