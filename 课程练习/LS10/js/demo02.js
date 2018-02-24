/**
 * Created by qile on 2017/8/14.
 */
//JS 词法作用域

var name = "Jack";
function echo() {
    console.log(name);
}
echo();


//词法作用域 与调用形式无关 实例一
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Bill or Jack



//词法作用域 与调用形式无关 实例二
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Bill or Jack