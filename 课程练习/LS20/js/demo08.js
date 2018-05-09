/**
 * Created by qile on 2017/8/14.
 */
//Part111 RegExp.prototype.test 方法
var regExp = /a/i;
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));

var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
/*
while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
}
*/


//Part222 RegExp.prototype.exec 方法 可以获得更为详细的信息，返回一个有属性的数组，
//属性index表示匹配到的位置
//对于非全局模式下返回第一个匹配的和所有的分组项，正则对象的lastIndex不起作用
var execExp = /\d{1,2}(\d)(\d)/;
var retExp = execExp.exec("12s342dsfsf233s");
console.log(retExp instanceof Array,retExp,execExp.lastIndex);
console.log(retExp instanceof Array,retExp,execExp.lastIndex);

//对于全局模式下 每检测一次lastIndex增加一次，再次用此正则对象匹配时，匹配的起始点为上一次的lastIndex
var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 6
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 14
/*
var ret2;
while (ret2 = execExp2.exec(ts)){
    console.log(execExp2.lastIndex);//每次执行后从哪开始重新匹配？
}
*/