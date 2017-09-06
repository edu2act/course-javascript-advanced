/**
 * Created by qile on 2017/8/14.
 */
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
a();//1
a();//2