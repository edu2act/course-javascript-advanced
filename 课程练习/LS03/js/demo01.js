/**
 * Created by qile on 2017/8/14.
 */
//字面量
var obj = {x:1,y:2};
var arr = [1,2,3,4,5];

//关键字知多少 arguments、break、continue...

//表达式与语句 表达式语句
var o = {x:1,y:2};
a>b;

// 存在二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
// 下述代码是对象还是语句块
{
    foo:max(2,3)
}