/**
 * Created by qile on 2017/8/14.
 */
/*
// 例一
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();
foo();
*/

// 例二
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1

/*
// 例三
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出多少？
console.log(inc(2));//输出多少？
inc = createInc(5);
console.log(inc(1));//输出多少？
*/

/*
// 例四
var scope = "global scope";
function checkScope() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}
checkScope()();//输出什么
*/
//查看JavaScript权威指南（第6版）184页中的描述