/**
 * Created by qile on 2017/8/14.
 */
const PI = 3.1415926;
console.log(PI);
// PI = 3;//给常量再赋值 报错

//声明时必须赋值,一旦声明必须立即初始化
//const foo;//报错
//const foo = 123;//ok


//const作用域同let
if(true){
    const MAX = 5;
}
//console.log(MAX);//报错


//const 除了声明常量外，也常用来声明不变的函数
const fee = function () {

};