/**
 * Created by qile on 2017/10/23.
 */

//在控制台上测试，去除到g或i修饰符后，看结果如何变化
//g全局、i大小写、m换行
var regExp = /a?b/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /a?b/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /a*b/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /a.b/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /\d/;
var str = "123\n456";
console.log(str.replace(regExp,"X"));//只换了一行


//test 和 exec
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