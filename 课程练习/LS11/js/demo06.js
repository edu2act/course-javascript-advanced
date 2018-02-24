/**
 * Created by qile on 2017/8/14.
 */

//立即执行表达式 常见形式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);

// 其他形式的IIFE 与运算符结合的写法
var i = function(){
    return 10;
}(); //i为10


true && function(a,b){
    return a>b?a:b;
}(5,9);


!function(x,y){
    return x==y?true:false; // === 返回什么
}("5",5);

//思考 !function(){return 2; }( ); 与 !function(){return 0; }();