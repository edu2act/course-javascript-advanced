/**
 * Created by qile on 2017/8/14.
 */
//与ES5中一样，实例化出的对象的原型是共享的
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        console.log("Point:",x,y);
    }

}
var p1 = new Point(1,2);
var p2 = new Point(1,2);
p1.__proto__ === p2.__proto__;//true

////////////////////
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
var p1 = new Point(2,3);
var p2 = new Point(3,2);
p1.__proto__.printName = function () {
    console.log('Oops')
};
p1.printName(); // "Oops"
p2.printName(); // "Oops"
var p3 = new Point(4,2);
p3.printName(); // "Oops"







class A{
    constructor(x){
        this.x = x;
    }
}
class B extends A{
    constructor(x,y){
        //this.y = y;//先写这句话，会报错
        var tt = super(x);
        console.log(tt.constructor,tt);
        this.y = y;
    }
}
var b = new B(1,2);





//////////////////////
class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }
}

class Square extends Polygon {
    constructor(length) {
        //this.height;// ReferenceError，super 需要先被调用！

        /*
           这里，它调用父类的构造函数的 length,
           作为Polygon 的 width和 height.
        */
        super(length, length);

        /*
            注意: 在派生的类中, 在你可以使用'this'之前, 必须先调用super()。
            忽略这, 这将导致引用错误。
        */
        this.name = 'Square';
    }

    get area() {
        return this.height * this.width;
    }

    // set area(value) {
    //     this.area = value;
    // }
}


//////////////////////
var obj1 = {
    method1() {
        console.log("method 1");
    }
}

var obj2 = {
    method2() {
        super.method1();
    }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"