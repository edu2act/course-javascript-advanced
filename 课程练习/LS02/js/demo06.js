/**
 * Created by qile on 2017/8/14.
 */

var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2));//如果是非数字，则先转换为字符串，然后在转成整型
console.log(parseFloat("23.456xy"));//同上，结果为23.456

console.log(Math.ceil(a2));
console.log(Math.floor(a2));
console.log(Math.round(a2));
a3 = 5e2;//指数行星
console.log(a3);

//NaN
var x = Number("xis021");
console.log(x);//NaN
isNaN(x);//true
typeof NaN;

console.log(Math.log(-1));//NaN
console.log(Math.acos(2));//NaN
console.log(NaN === NaN);//false


//Infinity与-Infinity
var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
isFinite(y2);//false，非有限数
isFinite(23);//true，有限数

//0与-0
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0


