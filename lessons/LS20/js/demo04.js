/**
 * Created by qile on 2017/10/20.
 */
// Part 11111111111111111
//字符类 []
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));

//范围类
console.log("12345667".replace(/[3-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//如果单独替换，则需要分组，见后续
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));

//思考：如何匹配 -
console.log("2017-10-23".replace(/[0-9]/g,"X"));
console.log("2017-10-23".replace(/[0-9-]/g,"X"));

// \d、\D、\w、\W、\s、\S 用[]如何表示
// [0-9]
// [^0-9]
// [a-zA-Z_0-9]
// [^a-zA-Z_0-9]
// [\t\n\x0B\f\r]
// [^\t\n\x0B\f\r]

//关于 . 除了回车和换行符之外的所有字符
/ab[0-9][^\r\n]/ //等效于/[ab\d.]/
console.log("@abc@123@".replace(/@./g,"Q"));
console.log("@abc@123@".replace(/.@/g,"Q"));

// Part 2222222222222222
//关于边界 ^ $ \b \B
console.log("This is a Boy is".replace(/is/g,0));
console.log("This is a Boy is".replace(/^is/g,0));
console.log("This is a Boy is".replace(/is$/g,0));
console.log("This is a Boy is".replace(/is\b/g,0));
console.log("This is a Boy is".replace(/is\B/g,0));
console.log("This is a Boy is".replace(/\bis/g,0));
console.log("This is a Boy is".replace(/\Bis/g,0));

// Part 33333333333333333333
//思考如何匹配 12345789abcdef34534789ede
//"12345789abcdef34534789ede".replace(/\d\d\d\d\d\d\d\d/g,"X");//不用量词的写法，非常不好
//"12345789abcdef34534789ede".replace(/\d{8}/g,"X");

//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));
//console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));

//注意：0到n次的写法{0,n}而不是{,n}

//思考：
var reg = /d{20}\w\d?\w+\d*\w{3,5}\d{3,}/;
