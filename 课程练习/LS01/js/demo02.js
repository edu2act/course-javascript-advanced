/**
 * Created by qile on 2017/8/14.
 */
/*
 console.log("i'm demo");
 */

//demo01中定义，demo02中调用，尽量避免全局方法
// function  max (a,b) {
//     return a>b?a:b;
// }


 //避免滥用全局变量,见demo2.js
 var x = 10;
 document.onclick = function () {
 //console.log("x = ",x);
 alert("x = "+x);
};


/*
//如何避免全局污染，使用IIFE函数立即执行表达式
(function () {  // 开始
    var x = 10;
    document.onclick = function () {
        //console.log("x = ",x);
        alert("x = "+x);
    };
})();           // 结束
*/