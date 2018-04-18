/**
 * Created by qile on 2017/8/14.
 */
//属性特性的继承特点
var o1 = {};
Object.defineProperty(o1,"x",{
    value:12,
    //writable:true
});//思考configurable和writable是true还是false
o1.x = 34;
console.log(o1.x);

var o2 = Object.create(o1);
o2.x = 56;//是在o2上添加了新属性x，还是修改了o1的x属性，还是前两者都不是？
console.log(o2.x);//输出多少？若o1的x的writable特性为true又会如何？

//访问器属性特性的继承特点
var o3 = {_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x = 34;
console.log(o3.x);//输出21还是34

var o4 = Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function (val) {
        this._x = val;
    },
    get:function () {
        return ++this._x;
    }
});
o4.x = 56;
console.log(o4.x);//输出多少


//全局变量的属性特性是如何的呢？
//{value: 23, writable: true, enumerable: true, configurable: false}
var a = 23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
delete a;//等效delete window.a;

