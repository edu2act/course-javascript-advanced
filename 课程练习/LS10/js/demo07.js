/**
 * Created by qile on 2017/8/14.
 */
var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);

console.log(reg2.lastIndex);
reg2.test("abc23def");
console.log(reg2.lastIndex);
reg2.test("abc23def");
console.log(reg2.lastIndex);

while (reg2.test("abc23def")){
    console.log(reg2.lastIndex);
}

var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);

var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);
/*
var returnArray3;
while (returnArray3 = reg3.exec(str)){
    console.log(reg3.lastIndex,returnArray3);
}
*/