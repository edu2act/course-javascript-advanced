/**
 * Created by qile on 2017/8/14.
 */

//Bool类型的值只有两个 true、false

//Undefined 的几种情况
var a;
console.log(a);//undefined

function foo(x,y) {
    console.log(x,y);//1 undefined
}
foo(1);

function fee() {
    //没有返回值的情况
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined


//null 需要注意的一点
console.log(typeof null);//object
