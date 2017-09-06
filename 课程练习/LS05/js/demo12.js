/**
 * Created by qile on 2017/8/14.
 */

// 非闭包
function foo(x) {
    var tmp = 3;
    function bar(y) {
        console.log(x + y + (++tmp));
    }
    bar(10);
}
foo(2);//16
foo(2);//16
foo(2);//16

// 闭包
function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 是一个闭包
bar(10);//16
bar(10);//17
bar(10);//18