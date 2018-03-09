/**
 * Created by qile on 2017/9/7.
 */
//变量作用域，了解词法作用域（静态性）
var x = 23;
var foo = function () {
    var x = 34;
    console.log("inside x:",x);//输出多少
    y = 45;//加var和不加var的区别
    console.log("inside y:",y);//输出多少
};
foo();//如果没调用会如何
console.log("outside x:", x);
console.log("outside y:", y);


//预解析和ES5作用域 实例
console.log(a);//输出什么
if(true){
    var a = 2;
}
console.log(a);//输出什么


//闭包 具体内容参见 闭包章节
//闭包是由函数和与其相关的引用环境组合而成的实体
//闭包是在其词法上下文中引用了自由变量的函数

//立即执行表达式 IIFE
(function (x,y) {
    return x>y?x:y;
}(4,5));

var result = function min(x,y) {
    return x<y?x:y;
}(2,3);
console.log(result);