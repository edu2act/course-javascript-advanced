/**
 * Created by qile on 2017/9/7.
 */
//函数定义 注意分号
function max(a,b) {
    return a>b?a:b;
}
console.log(max(2,3));

var min = function(a,b){
    return a<b?a:b;
};
console.log(min(2,3));

//函数声明的提升，初步了解，详细内容见函数章节
foo();//可以在定义前执行，解析器会将foo函数声明提升
function foo() {
    console.log("foo");
}

//函数参数数量问题回顾
function f1() {
    console.log(arguments);
    var argArr = Array.prototype.slice.call(arguments);
    console.log(argArr);
}
f1(2,3,4,"a");

function f2(a,b,c,d) {
    console.log(a,b,c,d);
}
f2(2,3);

//函数默认值部分，参见逻辑运算符进阶章节

//异常捕获参见异常捕获章节

//严格模式与非严格模式（松散模式），严格模式的作用是什么
//"use strict"
function f3() {
    //"use strict"
    gVar = 23;//定义了全局变量gVar，严格模式下是不允许的
}