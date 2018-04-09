/**
 * Created by qile on 2017/8/14.
 */
/*
//ES5作用域 与 变量共享问题
//查看Scope窗体中getNumFuncs中每一个函数的内部属性[[Scopes]]中的第0个元素闭包中的变量，看是否存在共享问题
function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//tmp[0]()...tmp[9]()都为几3还是10？
*/

/*
//以上代码等价于 存在变量共享问题
//查看Scope窗体中getNumFuncs中每一个函数的内部属性[[Scopes]]中的第0个元素闭包中的变量，看是否存在共享问题
function f(){
    var getNumFuncs = [];//函数数组
    var i=0;
    for(;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//tmp[0]()...tmp[9]()都为3还是10
*/


//IIFE 解决变量共享问题
//查看Scope窗体中getNumFuncs中每一个函数的内部属性[[Scopes]]中的第0个元素闭包中的变量，看是否存在共享问题
function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//输出为3，tmp[0]()...tmp[9]()都为是期望的结果


//局部变量的案例
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;//如果return i;的话输出几？
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//tmp[0]()...tmp[9]()都为几，,3？9？10？

