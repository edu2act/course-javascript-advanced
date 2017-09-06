/**
 * Created by qile on 2017/8/14.
 */
// Part1 不进行变量提升特性
//var 声明变量
console.log(a);
var a = 1;
console.log(a);

//预解析 上述代码等效于
var a;
console.log(a);
a = 1;
console.log(a);

//let和const不存在变量提升
console.log(a);//报错
let a = 2;
console.log(a);



// Part2 暂时性死区特性
// 只要块级作用域内存在let，它所声明的变量就“绑定”在这个区域，不再受外部影响
// let对这个块从一开始就形成了封闭的作用域，凡是在声明之前使用该变量，就会报错
//养成良好习惯，使用变量前声明
var tem = 123;
if(true){
    tmp = "abc";
    let tmp;//思考如果改为var是否会报错，如果let tmp在上一行之前如何？
}
//养成良好习惯，使用变量前声明

//let const不能重复声明
let abc;
let abc;//报错
