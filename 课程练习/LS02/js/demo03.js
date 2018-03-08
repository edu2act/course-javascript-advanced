/**
 * Created by qile on 2017/8/14.
 */

(function () {
    //基本（原始）数据类型与引用（对象）类型的区别 赋值方式不同
    var str_a = "a"; //
    var str_b = str_a; // 原始类型直接访问值,是值赋值
    str_b = "b"; // str_b的值为"b",而str_a的值仍然是"a"
    console.log(str_a,str_b);

    var obj_a = {v:"a"}; // obj_a存的是引用，引用堆内存中存的对象:{v:"a"};
    var obj_b = obj_a; // obj_b存的也是引用,引用了堆内存的值{v:"a"}；是引用赋值
    obj_b.v = "b"; // 通过obj_b访问(修改)堆内存的变量,这时候堆内存中对象值为:{v:"b"},由于obj_a和obj_b引用的是堆内存中同一个对象值，
    // 所以这时候打印都是{v:"b"}
    console.log(obj_a,obj_b);

    obj_b = {v:"c"}; // 注意：因为改的是整个对象，这里会在堆内存中创建一个新的对象值:{v:"c"},而现在的obj_b引用的是这个对象，
    // 所以这里打印的obj_a依旧是{v:"b"},而obj_b是{v:"c"}(两者在内存中引用的是不同对象了)。
    console.log(obj_a,obj_b);
}());

//注意：是值赋值还是引用赋值取决于变量的类型，而不取决于变量分配在堆区还是栈区
var obj_c = {x1:2,y1:3};//obj_c.x1在堆区还是栈区
var obj_d = {x2:2,y2:3};

console.log(obj_c.x1 === obj_d.x2);
console.log(obj_c === obj_d);

console.log({m:1}==={m:1});

//经典案例
//
var a =123;
function foo1(x){
	x = 345;
}
foo1(a);
console.log(a);

//
var a ={y:123};
function foo2(x){
	x.y = 345;
}
foo2(a);

console.log(a.y);

//
var a ={y:123};
function foo3(x){
	x.y = 345;
	x = {y:456};
}
foo3(a);
console.log(a.y);

//
var a ={y:123};
function foo4(x){
    x = {y:456};	
    x.y = 345;	
}
foo4(a);
console.log(a.y);
