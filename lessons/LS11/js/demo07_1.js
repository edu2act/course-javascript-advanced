/**
 * Created by qile on 2017/8/30.
 */
/*
//文件内的变量污染问题,尤其是异步执行的情况下
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};

//一长串代码后，假如看不见上述代码了
(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
*/



//如何避免文件之间的全局污染，使用IIFE函数立即执行表达式 查看JS文件demo07_2中的代码
//(function () {  // IIFE开始
    var x = 10;
    document.onclick = function () {
        // console.log("x = ",x);
        alert("x = "+x);
    };
//})();           // IIFE结束