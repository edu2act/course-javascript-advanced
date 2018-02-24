/**
 * Created by qile on 2017/8/14.
 */
//Part 11111111111111//////////////////
var tmp = 100;//注意：词法作用域
function foo(x) {
    var tmp = 3;//注意：词法作用域
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//
fee(10);//
fee(10);//

//Part 2222222222222//////////////////
function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //和相关作用域形成了一个闭包
bar(10); //输出什么？
bar(10); //输出什么？
bar(10); //输出什么？


// Part 33333333333
function fn() {
    var max = 10;
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);