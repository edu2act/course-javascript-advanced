/**
 * Created by qile on 2017/8/14.
 */
function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//输出多少？
f();//输出多少？


// 闭包实例
// 函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除
// 原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，
// 这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，
// 不会在调用结束后，被垃圾回收机制（garbage collection）回收
var n = 10;
function f1(){
    var n=999;
    nAdd=function(){n+=1;};//思考：nAdd是闭包么? n是哪个作用域下的变量
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); // 输出多少？
nAdd();
result(); // 输出多少？