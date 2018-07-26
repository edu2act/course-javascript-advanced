/**
 * Created by qile on 2017/8/14.
 */
// 基本（原始）数据类型与引用（对象）类型的区别 内存分配方式不同
// 内存的分配方式影响变量的生命周期
// 函数局部变量中的值类型变量与引用类型变量

function foo() {
    var n = 10;
    var m = true;
    var str = "Hello World"; // str:"Hello World"存在栈中

    // obj的引用存在栈中，{value:"Hello World"}存在堆中，通过栈中的变量名obj(访问地址)访问
    var obj = { value: "Hello World" };
};
foo();

//思考 a和b分配在那个区:
var a = 23;//window.a
var b = 34;//window.b



