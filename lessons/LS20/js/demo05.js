/**
 * Created by qile on 2017/10/20.
 */
//贪婪模式和非贪婪模式
"12345678".replace(/\d{3,6}/,'X');//默认为贪婪模式  X78

"12345678".replace(/\d{3,6}?/,'X');//设置为非贪婪模式 在量词后加？X45678

"12345678".replace(/\d{3,6}?/g,'X');//返回什么？

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));

// 与分组相关的 或
"abcdefghijk".replace(/abcde|fghijk/g,"X");
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");

//练习：
//将"xxabccxxdexx"替换为"yyabccxxdeyy"

//"xx11xx".replace(/(\bxx)|(xx\b)/g,"mm");


