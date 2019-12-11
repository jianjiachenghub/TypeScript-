// 可选参数 修改了下官方的例子 如果根据参数的不同返回结果不同，可以用联合返回类型
// 可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了
function buildName(firstName: string, lastName?: string):string|number {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return 1;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tomcat2 = buildName('Tom');