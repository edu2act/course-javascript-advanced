/**
 * Created by qile on 2017/8/14.
 */
//函数定义 函数声明方式
function max(a,b){
    return a>b?a:b;
}
max(2,3);

//函数定义 函数表达式方式 等号右侧可以是匿名函数也可以是非匿名函数
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);

/*
//略讲：非匿名函数便于调用栈追踪 测试使用匿名和非匿名函数的区别
var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
};
foo(2,3);

foo = function min(a,b){
    console.trace();
    return console.log(a>b?b:a);
};
foo(2,3);
*/

//函数定义 Function构造函数方式
var max = new Function("a","b","return a>b?a:b");
max(2,3);

//new Function 配置实例参见 NodeFunTest文件夹
//理解 new Function
