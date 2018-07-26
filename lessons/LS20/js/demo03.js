/**
 * Created by qile on 2017/10/20.
 */

// 正则表达式之 \
// 匹配一个词的边界 \b 一个词的边界就是一个词不被另外一个词跟随的位置或者不是另一个词汇字符前边的位置。
// 注意:一个匹配的词的边界并不包含在匹配的内容中。
console.log(/oo/.test("moon"));
console.log(/oo\b/.test("moon"));
console.log(/oon\b/.test("moon"));
console.log(/\boo/.test("moon"));

console.log("moon".search(/oo/));//1
console.log("moon".search(/oo\b/));//-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1

//匹配一个非单词边界 \B 他匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词。
//一个字符串的开始和结尾都被认为是非单词。
console.log(/oo\B/.test("moon"));
console.log(/oon\B/.test("moon"));
console.log(/oo\B/.test("moon"));
console.log(/\Boo\B/.test("moon"));

console.log("moon".match(/oo\B/));//["oo", index: 1, input: "moon"]
console.log("moonoonxoo".match(/oo\B/));//["oo", index: 1, input: "moonoonxoo"]
console.log("moon".match(/oon\B/));//null
console.log("moo".match(/\Boo\B/));//null

"noonday".replace(/\Boo/,"xx");//"nxxnday"
"noonday".search(/\Boo/);//1

//练习将"aaa"替换为"axa"

//
"possibly yesterday".replace(/y\B./,"aaa");//"possibly aaasterday"
"possibly yesterday".replace(/y\B/,"aaa");//"possibly aaaesterday"

//  \d匹配一个数字等价于[0-9]  例如， /\d/ 或者 /[0-9]/ 匹配"B2 is the suite number."中的'2'
//  \D匹配一个非数字等价于[^0-9]  例如， /\D/ 或者 /[^0-9]/ 匹配"B2 is the suite number."中的'B'


/*
\w
匹配一个单字字符（字母、数字或者下划线）。
等价于[A-Za-z0-9_]。
例如, /\w/ 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。
*/

/*
\W
匹配一个非单字字符。
等价于[^A-Za-z0-9_]。
例如, /\W/ 或者 /[^A-Za-z0-9_]/ 匹配 "50%." 中的 '%'。
 */

//  \s匹配一个空白字符 例如, /\s\w*/ 匹配"foo bar."中的' bar'
//  \S匹配一个非空白字符 例如, /\S\w*/ 匹配"foo bar."中的'foo'

//\d \D \w \W \s \S 案例
"sdafsa sdfea2s".replace(/a\ds/g,"*");
"sdafsa sdfea2s".replace(/a\Ds/g,"*");
"sdafsa sdfea2s".replace(/a\ws/g,"*");
"sdafsa sdfea2s".replace(/a\Ws/g,"*");

//
var str = "test22314234244dgfqeqe232qe13ed";
var newStr = str.search(/\dqe/);
console.log(newStr);
str.replace(/\dqe/,11223344);
console.log(str);

//匹配一个非单词边界  /\B../匹配"noonday"中得'oo', 而/y\B./匹配"possibly yesterday"中得’ye‘
console.log("noonday".match(/\B../));
console.log(/\B../.test("noonday"));

