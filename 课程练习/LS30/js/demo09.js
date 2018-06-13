/**
 * Created by qile on 2017/8/14.
 */
// Part 11111
function foo(x=5){
    let x = 1;//报错
    const x = 2;//报错
    var x = 3;//正常
}
foo();


// Part 222222
//默认值顺序，参数一般有顺序，有默认值的参数应该是尾参数
//否则无法使有默认值的用默认值，没有默认值的用传递的参数
function f(x = 1,y) {
    return [x,y];
}
f();//[1,undefined]
f(2);//[2,undefined]
//f(,3);//报错，无法使x用1，y用3


//所以有默认值的参数在最后
function f(x,y = 1) {
    return [x,y];
}
f();//[undefined, 1]
f(2);//[2, 1] 这样就可以x为传递的参数，y为默认的值