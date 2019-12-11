interface SearchFunc {
    (source: string, subString: string): boolean;// 输入：输出  与数组类似[index: number]: number;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}