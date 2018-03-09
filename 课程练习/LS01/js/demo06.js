//数据类型
var num = 1;
var str = "some string";
var b = true;
var n = null;
var u = undefined;//如果没赋值的话，是什么情况

var arr = ["apple", "pear", "banana"];
var func = function(){
    return "this a function";
};
var obj = new Object();
obj.name = "test";

console.log("\n");
console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof b); //boolean
console.log(typeof n); //这里返回的是object，这是JS语言的特别之处
console.log(typeof u); //undefined
console.log("\n");
console.log(typeof arr); //object
console.log(typeof func); //function
console.log(typeof obj); //object

//思考
console.log(typeof Number); //
console.log(typeof String); //
console.log(typeof Boolean); //
console.log(typeof Object); //
console.log(typeof Array); //
console.log(typeof Function); //
console.log(typeof RegExp); //
console.log(typeof Error); //
console.log(typeof Math); //
console.log(typeof JSON);

//==、=== 回顾 值类型与引用类型回顾 不同类型变量 判等时的区别
//判等步骤
//1.看是==还是===

//2.如果是===则先看类型
// 类型不同肯定false
// 类型相同（如果是基本类型：判断值是否相等；  如果是引用类型：判断引用是否是同一个引用）

//3.如果是==则先看类型
// 先试着进行类型转换
// 转换后（如果是基本类型：判断值是否相等；   如果是引用类型：判断引用是否是同一个引用）
var a1 = 2;
var a2 = "2";
console.log(a1==a2);//true or false 原理是什么？？？？？
console.log(a1===a2);

var b1 = {};
var b2 = {};
console.log(b1==b2);//true or false 原理是什么？？？？？
console.log(b1===b2);//true or false
console.log(b1===b1);//true or false

//进一步理解
var c1 = 23;
var c2 = new Number(23);
console.log(c1==c2);//true or false 原理是什么？？？？？
console.log(c1===c2);//true or false

//包装对象
var str2 = "abc";
console.log(str2.length);
str2.length = 1;
console.log(str2);//原始类型变量的不可变性，指的是包装对象的改变并不影响原始类型的变量

//怎么理解JS中都是对象这句话
//访问基本类型的变量属性时，会创建临时包装对象，访问的是该包装对象的属性
//另外改变此临时包装对象的属性，并不会影原变量（原始类型变量的不可变性）

//undefined与null 未确定的值、空引用

//typeof 与 instance
//typeof 常用于检测基本类型的变量
//instance 常用于检测引用类型的变量 instance左侧期望是一个对象，右侧期望是一个类型
console.log({}instanceof Object);
console.log([]instanceof Object);
console.log([]instanceof Array);
