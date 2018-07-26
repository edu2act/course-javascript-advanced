/**
 * Created by qile on 2017/8/14.
 */
////////////////////////////////
var f = function (v) {
    return v + 1;
};
f(2);//返回3

//使用箭头函数，上述代码等效如下,只有一个参数和一条语句
var f = v => v + 1; //单参数可以不用（），单语句可以不用return关键字
//var f = (v) => {return v + 1;};
f(2);//返回3


///////////////////////////////
//没有参数和有多个参数的情况下，需要使用小括号来表示参数，如果有多条语句则需要有大括号表示函数体
var f = () => 5;
// 等同于
var f = function () {
    return 5
};

var foo = (num1, num2) => {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};
//foo(2,3);
//foo(3,2);
// 等同于 ES5的写法
var foo = function (num1, num2) {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};
//foo(2,3);
//foo(3,2);

///////////////////////////////////
var max = function (a, b) {
    return a > b ? a : b;
};

//箭头函数可以与变量解构结合使用
const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});

// 等同于
function full({ first, last }) {
  return last + ' ' + first;
}
full({first:"Ming",last:"Li"});

