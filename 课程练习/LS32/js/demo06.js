/**
 * Created by qile on 2017/8/14.
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)，如果没有调用super将报错
        this.color = color;
    }
    show() {
        console.log(this.x,this.y,this.color);
    }
}
var cp = new ColorPoint(1,2,3);
cp.show();

console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true

//类-类原型链、对象-对象原型链
console.log(Object.getPrototypeOf(ColorPoint) === Point);//true
console.log(ColorPoint.__proto__ === Point);//true
console.log(cp.__proto__ === ColorPoint.prototype);//true
console.log(cp.__proto__.__proto__ === Point.prototype);//true
console.log(ColorPoint.__proto__.__proto__ === Function.__proto__);//true

// 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
// 这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
// 如果不调用super方法，子类就得不到this对象

// ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.call(this)）。
// ES6 的继承机制完全不同，必须先调用super方法，
// 然后再用子类的构造函数修改this。
//
// 如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。
// 也就是说，不管有没有显式定义，任何一个子类都有constructor方法


// 另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，
// 才可以使用this关键字，否则会报错。
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        //this.color = color; // ReferenceError 报错因为没有调用父类构造函数，没有实例
        super(x, y);
        this.color = color; // 正确
    }
}


// 关于静态方法的继承，父类的静态方法，可以被子类继承。
class Foo {
    static classMethod() {
        return 'hello';
    }
}
class Bar extends Foo {
}
Bar.classMethod(); // 'hello'
// 上面代码中，父类Foo有一个静态方法，子类Bar可以调用这个方法。

// 静态方法也是可以从super对象上调用的。
class Foo {
    static classMethod() {
        return 'hello';
    }
}
class Bar extends Foo {
    static classMethod() {
        return super.classMethod() + ', too';//此时的super指代父类
    }
}
Bar.classMethod();// "hello, too"


//静态方法的继承的案例
class Human {
    constructor() {}
    static ping() {
        return 'ping';
    }
}

class Computer extends Human {
    constructor() {
        super();//super此处指代父类构造函数
    }
    static pingpong() {
        return super.ping() + ' pong';//super此处指代父类
    }
}
Computer.pingpong(); // 'ping pong'
