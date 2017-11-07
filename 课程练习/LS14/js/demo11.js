/**
 * Created by qile on 2017/8/14.
 */
//Part1111111111111111
//没有Symbol时的重名案例
var objProto = {x:1,y:2};
var obj = Object.create(objProto);
obj.x = 3;
console.log(obj.hasOwnProperty("x"));
console.log(obj.__proto__.hasOwnProperty("x"));

//定义Symbol变量，注意Symbol是基本数据类型的一种，不能用new
//回顾下基本数据类型的特点，区分基本类型和引用类型
let s = Symbol();
typeof s;
// "symbol"

//Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
var s1 = Symbol('foo');
var s2 = Symbol('bar');
s1 // Symbol(foo)
s2 // Symbol(bar)
s1.toString(); // "Symbol(foo)"
s2.toString(); // "Symbol(bar)"


//Part2222222222222222222
//注意，Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的。
// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();
s1 === s2 // false
// 有参数的情况
var s1 = Symbol("foo");
var s2 = Symbol("foo");
s1 === s2 // false

//Symbol值不能与其他类型的值进行运算，会报错。
var sym = Symbol('My symbol');
//"your symbol is " + sym;//报错
//但是，Symbol值可以显式转为字符串。
var sym = Symbol('My symbol');
String(sym); // 'Symbol(My symbol)'
sym.toString(); // 'Symbol(My symbol)'


