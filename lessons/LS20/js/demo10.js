/**
 * Created by qile on 2017/8/14.
 */
//1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
//2、联通号段有130，131，132，145，155，156，176，185，186
//3、电信号段有133，153，177，180，181，189
//将电话号码进行分类
var numbers = [
    13335361211, 13897516385, 15022457757, 15191936306, 18693949497,
    13933314962, 13138569753, 13125634288, 18168751105, 13240288945,
    13098645914, 15603692153, 13455257780, 15916685067, 14701124042,
    13089741902, 15560351609, 1211131444, 13017332800, 18937330815,
    15699699730, 13895038245, 18653855868, 15324150371, 13202536075,
    15873730173, 18828673819, 17658565118, 13069428953, 13814537603
];
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码
//写一段代码，将对应的号码段存储到对应的数组中
for(var i=0;i<numbers.length;i++){
    if(/1(3[4-9]|47|5[0127-9]|78|8[2-47-8])\d{8}/.test(numbers[i])){
        CMCC.push(numbers[i]);//console.log("移动");
    }else if(/2/.test(numbers[i])){ // 补全代码
        CUCC.push(numbers[i]);//console.log("联通");
    }else if(/3/.test(numbers[i])){ // 补全代码
        CTCC.push(numbers[i]);//console.log("电信");
    }else{
        Others.push(numbers[i]);//console.log("其他");
    }
}
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);
console.log("其他号码：",Others);



//参考部分：
// RegExp.prototyp.exec方法
//如果只判断有没有，可以使用非全局模式
var reg1 = /\d(\w)\d/;
var ts1 = "1a2b3c4d5e";
// var reg1 = /\d(\w)(\w)\d/;
// var ts1 = "1az2by3cx4d5e";

var ret1 = reg1.exec(ts1);
//非全局模式下lastIndex不起作用
//非全局调用返回的数组，第一个元素，匹配的内容，第二个元素分组一中匹配的元素，依次类推
console.log(reg1.lastIndex, "__", ret1);
ret1 = reg1.exec(ts1);
console.log(reg1.lastIndex, "__", ret1);//非全局返回结果相同

//如果想找到所有匹配项，则需要使用全局模式
var reg2 = /\d(\w)\d/g;
var ts2 = "1a2b3c4d5e";

var ret2 = reg2.exec(ts2);
console.log(reg2.lastIndex, "__", ret2);
ret2 = reg2.exec(ts2);//全局模式下lastIndex起作用
console.log(reg2.lastIndex, "__", ret2);

/*
var  ret3;
while (ret3 = reg2.exec(ts2)){
    console.log(reg2.lastIndex,"__",ret3);
}
*/

//1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
//2、联通号段有130，131，132，145，155，156，176，185，186
//3、电信号段有133，153，177，180，181，189
//将电话号码进行分类
var numbers = [
    13335361211, 13897516385, 15022457757, 15191936306, 18693949497,
    13933314962, 13138569753, 13125634288, 18168751105, 13240288945,
    13098645914, 15603692153, 13455257780, 15916685067, 14701124042,
    13089741902, 15560351609, 1211131444, 13017332800, 18937330815,
    15699699730, 13895038245, 18653855868, 15324150371, 13202536075,
    15873730173, 18828673819, 17658565118, 13069428953, 13814537603
];
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码
//写法一
for(var i=0;i<numbers.length;i++){
    //使用正则表达式，筛分不同号码段
    //console.log(numbers[i]);
    if(/1(3[4-9]|47|5[012789]|78|8[23478])\d{8}/.test(numbers[i])){
        CMCC.push(numbers[i]);
    }else if(/1(3[0-2]|45|5[56]|76|8[56])\d{8}/.test(numbers[i])){
        CUCC.push(numbers[i]);
    }else if(/1(33|53|77|8[019])\d{8}/.test(numbers[i])){
        CTCC.push(numbers[i]);
    }else {
        Others.push(numbers[i]);
    }
}
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);
console.log("其他号码：",Others);

//写法二
CMCC = numbers.toString().match(/1(3[4-9]|47|5[012789]|78|8[23478])\d{8}/g);
CUCC = numbers.toString().match(/1(3[0-2]|45|5[56]|76|8[56])\d{8}/g);
CTCC = numbers.toString().match(/1(33|53|77|8[019])\d{8}/g);
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);


//////
//1、搜狐邮箱后缀：包括sohu.com.cn、sohu.com
//2、新浪邮箱后缀：包括sina.com.cn、sina.com、sina.cn
//3、qq邮箱后缀：包括qq.com.cn、qq.com
//4、其他邮箱后缀：包括满足格式的其他邮箱

//使用正则表达式和数组相关的方法，将邮箱进行分类,要求分为4类，并存在4个对应的数组中
var emails = [
    "Ky-D1zU@sina.cn", "jzX4xq@gmail.cn", "J8XNzf7SQV@sohu.com.cn",
    "TSmA4xX@sohu.com.cn", "yDzwr@msn.cn", "l7bSnfYDz-3OO@sina.cn",
    "uavXW@sina.com", "w65FgY5@gmail.cn", "wY6iRUCr@126.com.cn",
    "Gy0GKnygcG@sina.com.cn", "SoMUWIfO@qq.com", "DGOoczUOLl36Oh@163.cn",
    "QP8ENE@gmail.com.cn", "la4-Qu7xxn@qq.com.cn", "_IKhiFMI-rL@sohu.com"
];

var sohuArray = [];
var sinaArray = [];
var qqArray = [];
var otherArray = [];

//练习
//完成下述任务，其中1、2、3需要有调试成功的截图
//1.给定这样一个连字符串，var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
//写一个function提取上述字符串中的字符最终输出：[254,289,675]

//2.给定这样一个连字符串，var s2 = "get-element-by-id";
//写一个function转换为驼峰命名法形式的字符串输出：getElementById

//3.写出正则表达式，从一个字符串中提取链接地址。
//如var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
//写一个function从s3中提取出网址，输出数组：["www.baidu.com","www.edu2act.cn"]

//其他案例参见链接
//https://segmentfault.com/p/1210000011083522

