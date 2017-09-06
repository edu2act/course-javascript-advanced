/**
 * Created by qile on 2017/8/14.
 */
//闭包实例二
function foo(x) {
    var tmp = 3;
    return function (y) {
        x.memb = x.memb ? x.memb + 1 : 1;
        console.log(x + y + tmp,x.memb);
    }
}
var age = new Number(2);
var bar = foo(age); // bar 现在是一个引用了age的闭包
bar(10); //15 1
bar(10); //15 2
bar(10); //15 3