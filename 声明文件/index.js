"use strict";
// 浅显的理解
/**
 * 可以暴露定义到全局，然后我们点击某个函数或者依赖就会跳转到.d.ts的文件去
 * 让tsc编译器知道某个变量比如jquery这种本来不是ts库

*/
// import jQuery form 'jQuery'  // 比如我这里引入jQuery 但tsc编译器肯定是不知道jQuery是什么类型的，所以就需要加上一个全局类型声明
// 一般安装包里会自带@types 里面就是各种各样的.d.ts不用我们手动声明
jQuery('#foo');
//# sourceMappingURL=index.js.map