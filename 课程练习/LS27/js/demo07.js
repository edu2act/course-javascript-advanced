/**
 * Created by qile on 2017/8/14.
 */
// 思考ES5 ES6中的函数提升是什么样的情况
//下述代码在ES5中是如何执行的
function f() {
    console.log("outside")
};

{
    f();
    {
        function f() {console.log("inside");}
    }
}
// 注意：不同的环境，存在兼容性问题
// 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数
// 如果确实需要，也应该写成函数表达式，而不是函数声明语句

/*
//上述代码在ES5环境中 中等效于下述代码 输出inside
function f() {
    console.log("outside")
};

{
    f();
    //{
        function f() {console.log("inside");}
    //}
}
*/
//但是在ES6中内部f定义相当于限定在块内，访问的是外层f函数，输出outside，ES5和ES6代码存在兼容性问题


