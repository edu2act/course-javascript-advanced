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

//const指向的对象引用不可变，但其属性或元素（如果是数组对象的话）是可变的
const a = [];
a.push(123,234);//可以
a.length = 1;//可以
a = "str";//报错，因为a是const其元素或属性可改，但其引用不能修改类似于 const指针
//回顾 常指针,指向常量的指针
