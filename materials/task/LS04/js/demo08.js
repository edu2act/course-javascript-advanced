/**
 * Created by qile on 2017/8/14.
 */

// Part 111111111111111111
console.log(a);
var a = 1;
console.log(a);

//上边代码等价如下 解析器眼中的代码
var a;
console.log(a);
a = 1;
console.log(a);

//思考如下代码输出什么 值类型
console.log(a,b);//输出什么
var b = 23;
console.log(a,b);//输出什么
var a = b;
console.log(a,b);//输出什么

//思考如下代码输出什么 引用类型
console.log(obj1,obj2);//输出什么
var obj1 = {x:23};
console.log(obj1,obj2);//输出什么
var obj2 = obj1;
console.log(obj1,obj2);//输出什么
obj2.x =25;
console.log(obj1,obj2);//输出什么


// Part 22222222222222222
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2


// Part 33333333333333333 见下一页PPT 同时有var和function的情况一
foo();
var foo = function(){
    console.log("foo");
};

//思考以下代码是否会报错，写出这段代码的等价形式
console.log(foo);//输出什么
var foo = function(){
    console.log("foo");
};
foo();//是否会报错



// Part 444444444444444444
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();