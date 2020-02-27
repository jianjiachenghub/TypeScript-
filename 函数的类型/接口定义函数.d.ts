interface SearchFunc {
    (source: string, subString: string): boolean;
}
declare let mySearch: SearchFunc;
