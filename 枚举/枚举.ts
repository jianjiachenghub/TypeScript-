enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
//枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
/* 
事实上，上面的例子会被编译为：
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {})); */



//手动赋值
enum Days2 {Sun = 3, Mon = 2, Tue, Wed = 10, Thu, Fri, Sat};
console.log(Days2["Sun"] === 3); // true
console.log(Days2["Wed"] === 10); // true
console.log(Days2[3] === "Sun"); // false
console.log(Days2[3] === "Tue"); // true   
// 可以看出未手动赋值的枚举项会接着上一个枚举项递增
/* 
编译结果
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 3] = "Sun";
    Days2[Days2["Mon"] = 2] = "Mon";
    Days2[Days2["Tue"] = 3] = "Tue";//这里覆盖了Days2[3]的"Sun"为"Tue"
    Days2[Days2["Wed"] = 10] = "Wed";
    Days2[Days2["Thu"] = 11] = "Thu";
    Days2[Days2["Fri"] = 12] = "Fri";
    Days2[Days2["Sat"] = 13] = "Sat";
})(Days2 || (Days2 = {})); */



// 如果想赋值不是number类型的话可以用类型断言来让tsc无视类型检测
// 如果赋值为小数则仍然在7.5的基础生加一
enum Days3 {Sun = 7.5, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};
/* 
编译结果
var Days3;
(function (Days3) {
    Days3[Days3["Sun"] = 7.5] = "Sun";
    Days3[Days3["Mon"] = 8.5] = "Mon";
    Days3[Days3["Tue"] = 9.5] = "Tue";
    Days3[Days3["Wed"] = 10.5] = "Wed";
    Days3[Days3["Thu"] = 11.5] = "Thu";
    Days3[Days3["Fri"] = 12.5] = "Fri";
    Days3[Days3["Sat"] = "S"] = "Sat";
})(Days3 || (Days3 = {}));
; */