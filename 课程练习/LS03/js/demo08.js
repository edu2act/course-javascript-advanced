/**
 * Created by qile on 2017/8/14.
 */


// switch 语句在比较值时使用的是全等操作符,因此不会发生类型转换
var i = "1";
switch(i){
    case 1:
        console.log("case 1 Number");
        break;
    default:
        console.log("default");
}
//输出default 而不是 case 1 Number



var i = "1";
switch(i){
    case 1:
        console.log("case 1 Number");
        break;
    case "1":
        console.log("case 1 String");
        break;
    default:
        console.log("default");
}
//此时输出 case 1 String



// 在switch语句中使用表达式，如下
var i = 65;
switch(true){
    case i>=60:
        alert('及格');
        break;
    case i<60:
        alert('不及格');
        break;
    default:
        alert('default');
}