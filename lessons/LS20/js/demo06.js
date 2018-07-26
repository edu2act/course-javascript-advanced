/**
 * Created by qile on 2017/8/14.
 */
//分组的 反向引用
//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");

//分组的 忽略分组 （？：）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");

//注意括号的转义字符，第一个相当于做了分组
console.log(/^(ab)$/.test("(ab)"));
console.log(/^\(ab\)$/.test("(ab)"));

//正则前瞻，了解即可 判断后边是否满足断言
console.log("a23*4vv".replace(/\w(?=\d)/g,"X"));//XX3*4vv 正项前瞻
console.log("a23*4v8".replace(/\w(?=\d)/g,"X"));//XX3*4X8
console.log("a23*4v8".replace(/\w(?!\d)/g,"X"));//a2X*XvX 负项前瞻
