/**
 * Created by qile on 2017/8/30.
 */
//如何避免全局污染，使用IIFE函数立即执行表达式 JS文件2中的代码
//(function () {  // IIFE开始
   var x = 20;
//})();           // IIFE结束

// function nameSpace() {
//     var x = 20;
// }
// nameSpace();



/*
//由于ES5没有块作用域，即使写成如下形式依然有问题
if(true){
    var x = 30;
}
*/