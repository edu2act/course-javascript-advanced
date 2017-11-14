/**
 * Created by qile on 2017/11/13.
 */
//ES5 中使用构造函数定义并生成新的对象 Part11111111111
function Point(x,y){
    this.x = x;
    this.y = y;
}
Point.prototype.show = function(){
    console.log("Point:",this.x,this.y);
};
var p1 = new Point(1,2);
p1.show();
console.log(Object.keys(p1));
console.log(Object.keys(p1.__proto__));


//ES6 中的class 语法 Part2222222222222
class Point{
    constructor(){
        this.x = 1;
        this.y = 2;
        var private_z = 3;
        this.d = function(){
            console.log(this.x,this.y,private_z);//可以访问私有数据成员
        }
    }
    show(){
        //console.log("show:",this.x,this.y,private_z);//报错,因为无法访问私有数据成员
        console.log("show:",this.x,this.y);
    }
}
var p2 = new Point();
console.log(Object.getOwnPropertyNames(p2));
console.log(Object.getOwnPropertyNames(p2.__proto__));
p2.d();
p2.show();

//class 是语法糖 本质还是原型继承
console.log(typeof Point);//function
console.log(Point instanceof Function);//true
console.log(Point === Point.prototype.constructor); // true
console.log(p2.constructor === Point.prototype.constructor);

//与ES5的区别 class类内定义的方法是不可枚举的
console.log(Object.keys(p2));
console.log(Object.keys(p2.__proto__));

//补充：
// 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。
// Object.assign方法可以很方便地一次向类添加多个方法。
class Point {
    constructor(){

    }
}
Object.assign(Point.prototype, {
    foo(){},
    fee(){}
});