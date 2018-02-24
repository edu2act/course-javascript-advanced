/**
 * Created by qile on 2017/8/14.
 */

// 调用栈 Call Stack
// 对于通俗理解 调用栈类比于学生定位手表  foo <===> goToStore，  bar <===> goToBank
console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");//设置断点
    var y = 2;
    function bar(){
        console.log("bar上下文-start");//设置断点
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end");//设置断点
    }
    bar();
    console.log("foo上下文-end");//设置断点
}
foo();//设置断点
console.log("全局上下文-end");//设置断点
