/**
 * Created by qile on 2017/8/14.
 */
//Math 对象属性
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log("------------------");

//Math 对象数值方法
console.log(Math.random());
console.log(Math.abs(-123.456));
console.log(Math.pow(2,3),Math.pow(4,0.5));
console.log(Math.sqrt(256));
console.log("------------------");

console.log(Math.round(0.60),Math.ceil(0.60),Math.floor(0.60));
console.log(Math.round(0.50),Math.ceil(0.50),Math.floor(0.50));
console.log(Math.round(0.40),Math.ceil(0.40),Math.floor(0.40));
console.log(Math.round(0.49),Math.ceil(0.49),Math.floor(0.49));//是否考虑进位？
console.log(Math.round(-4.40),Math.ceil(-4.40),Math.floor(-4.40));
console.log(Math.round(-4.60),Math.ceil(-4.60),Math.floor(-4.60));

console.log(Math.max(5,7),Math.max(5,7));
console.log(Math.max(-3,5),Math.max(-3,5));
console.log(Math.max(-3,-5),Math.max(-3,-5));
console.log(Math.max(7.25,7.30),Math.max(7.25,7.30));
console.log("------------------");

//Math 三角方法
//角度转弧度方法
function toRadians(degrees) {
    return degrees/180 *Math.PI;
}
console.log(toRadians(180));

//弧度转角度方法
function toDegrees(radians) {
    return radians/Math.PI*180;
}
console.log(toDegrees(Math.PI/4));
console.log("------------------");

console.log(Math.sin(toRadians(90))); //参数一个以弧度表示的角。将角度乘以 （2PI/360）即可转换为弧度
console.log(Math.cos(toRadians(180)));
console.log("------------------");

