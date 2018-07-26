/**
 * Created by qile on 2017/8/14.
 */
//上一章数据类型知识点回顾 Part1~Part3
//Part1
var a = [1,2,3];
var b = a;
console.log(a,b);
b.pop();
console.log(a,b);
b = [4,5,6];
console.log(a,b);

//Part2
function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
    //console.log(x);
}
var a = [1,2,3];
foo(a);
console.log(a);

//Part3
function foo(x) {
    x.push(4);
    //console.log(x);
    x.length = 0;
    x.push(5,6,7,8);
    //console.log(x);
}
var a = [1,2,3];
foo(a);
console.log(a);




//字面量
var obj = {x:1,y:2};
var arr = [1,2,3,4,5];

//关键字知多少 arguments、break、continue...

//表达式与语句 表达式语句
var o = {x:1,y:2};
a>b;

// 存在二义性的语句，要避免有二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
// 下述代码是对象还是语句块
{
    foo:max(2,3)
}

// 存在二义性的语句 补充一
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}

// 存在二义性的语句 补充二
var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}


