//实上，items 是一个数组。所以我们可以用数组的类型来定义它：
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let itemss = [];
push(itemss, 1, 2, 3);