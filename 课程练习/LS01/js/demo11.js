/**
 * Created by qile on 2017/9/7.
 */

//预解析和ES5作用域 实例
console.log(a);//输出什么
if(true){
    var a = 2;
}
console.log(a);//输出什么


//立即执行表达式 IIFE
var result = function max(x,y) {
    return x>y?x:y;
}(2,3);
console.log(result);