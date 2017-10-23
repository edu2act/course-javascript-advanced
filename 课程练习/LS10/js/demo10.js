/**
 * Created by qile on 2017/8/14.
 */





//注意转义字符 第一个相当于做了分组
console.log(/^(ab)$/.test("(ab)"));
console.log(/^\(ab\)$/.test("(ab)"));

// RegExp.prototyp.exec方法

//如果只判断有没有，可以使用非全局模式
var reg1 = /\d(\w)\d/;
var ts1 = "1a2b3c4d5e";
// var reg1 = /\d(\w)(\w)\d/;
// var ts1 = "1az2by3cx4d5e";

var ret1 = reg1.exec(ts1);
//非全局模式下lastIndex不起作用
//非全局调用返回的数组，第一个元素，匹配的内容，第二个元素分组一中匹配的元素，依次类推
console.log(reg1.lastIndex,"__",ret1);
ret1 = reg1.exec(ts1);
console.log(reg1.lastIndex,"__",ret1);//非全局返回结果相同


//如果想找到所有匹配项，则需要使用全局模式
var reg2 = /\d(\w)\d/g;
var ts2 = "1a2b3c4d5e";

var ret2 = reg2.exec(ts2);
console.log(reg2.lastIndex,"__",ret2);
ret2 = reg2.exec(ts2);//全局模式下lastIndex起作用
console.log(reg2.lastIndex,"__",ret2);

/*
var  ret3;
while (ret3 = reg2.exec(ts2)){
    console.log(reg2.lastIndex,"__",ret3);
}
*/
