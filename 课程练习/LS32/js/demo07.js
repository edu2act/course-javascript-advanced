/**
 * Created by qile on 2017/8/14.
 */

//super 这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

// Part 111111111111111111  第一种情况，super作为函数调用时，代表父类的构造函数。
// ES6 要求，子类的构造函数必须执行一次super函数。
class A {}
class B extends A {
    constructor() {
        super();
    }
}
// 上面代码中，子类B的构造函数之中的super()，代表调用父类的构造函数。
// 这是必须的，否则 JavaScript 引擎会报错。
// 注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，
// 即super内部的this指的是B类的实例，
// 因此super()在这里相当于A.prototype.constructor.call(this)，参见下述例子
class A {
    constructor() {
        console.log(new.target.name);//
    }
}
class B extends A {
    constructor() {
        super();
    }
}
new A(); // A
new B(); // B
//上面代码中，new.target指向当前正在执行的函数。
// 可以看到，在super()执行时，它指向的是子类B的构造函数，而不是父类A的构造函数。
// 也就是说，super()内部的this指向的是B。

//作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
class A {}
class B extends A {
    m() {
        //super(); // 报错
    }
}
// 上面代码中，super()用在B类的m方法之中，就会造成句法错误。


//Part 22222222222222222222
// 第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
class A {
    p() {
        return 2;
    }
}
class B extends A {
    constructor() {
        super();
        console.log(super.p()); // 2  super指向A.prototype
    }
    f(){
        console.log(super.p()); // 2  super指向A.prototype
    }
}
let b = new B();
b.f();
// 上面代码中，子类B当中的super.p()，就是将super当作一个对象使用。
// 这时，super在普通方法之中，指向A.prototype，所以super.p()就相当于A.prototype.p()。


// 这里需要注意，由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，
// 是无法通过super调用的。
class A {
    constructor() {
        this.p = 2;
    }
}
class B extends A {
    get m() {
        return super.p;
    }
}
let b = new B();
b.m; // undefined 因为super代表A.prototype, A.prototype上并没有p属性

//如果属性定义在父类的原型对象上，super就可以取到。
class A {}
A.prototype.x = 2;
class B extends A {
    constructor() {
        super();
        console.log(super.x) // 2
    }
}
let b = new B();
//上面代码中，属性x是定义在A.prototype上面的，所以super.x可以取到它的值。

//ES6 规定，通过super调用父类的方法时，方法内部的this指向子类。体现了多态性
class A {
    constructor() {
        this.x = 1;
    }
    print() {
        console.log(this.x);
    }
}
class B extends A {
    constructor() {
        super();
        this.x = 2;
    }
    m() {
        super.print();
    }
}
let b = new B();
b.m();// 2
// 上面代码中，super.print()虽然调用的是A.prototype.print()，
// 但是A.prototype.print()内部的this指向子类B，导致输出的是2，而不是1。
// 也就是说，实际上执行的是super.print.call(this)。
// 由于this指向子类，所以如果通过super对某个属性赋值，
// 这时super就是this，赋值的属性会变成子类实例的属性。
// 这体现了多态性


//如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的prototype
class Parent {
    static myMethod(msg) {
        console.log('static', msg);
    }
    myMethod(msg) {
        console.log('instance', msg);
    }
}
class Child extends Parent {
    static myMethod(msg) {
        super.myMethod(msg);//super 指的是Parent类
    }
    myMethod(msg) {
        super.myMethod(msg);//super 指的是Parent.prototype
    }
}
Child.myMethod(1); // static 1
var child = new Child();
child.myMethod(2); // instance 2
//上面代码中，super在静态方法之中指向父类，在普通方法之中指向父类的原型对象即Parent.prototype


//注意，使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。避免二义性
class A {}
class B extends A {
    constructor() {
        super();
        //console.log(super); // 报错 二义性
    }
}
// 上面代码中，console.log(super)当中的super，无法看出是作为函数使用，还是作为对象使用，
// 所以 JavaScript 引擎解析代码的时候就会报错。
// 这时，如果能清晰地表明super的数据类型，就不会报错。



//以下内容为补充内容：
class A {}
class B extends A {
    constructor() {
        super();
        console.log(super.valueOf() instanceof B); // true
    }
}

let b = new B();
// 上面代码中，super.valueOf()表明super是一个对象，因此就不会报错。
// 同时，由于super使得this指向B，所以super.valueOf()返回的是一个B的实例。

//最后，由于对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字。
var obj = {
    toString() {
        return "MyObject: " + super.toString();
    }
};
obj.toString(); // MyObject: [object Object]


//需要注意的是，子类继承父类时，new.target会返回子类。
class Rectangle {
    constructor(length, width) {
        console.log(new.target === Rectangle);
        // ...
    }
}
class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

var obj = new Square(3); // 输出 false
//上面代码中，new.target会返回子类。

//利用这个特点，可以写出不能独立使用、必须继承后才能使用的类，抽象类
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('本类不能实例化');
        }
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        // ...
    }
}
var x = new Shape();  // 报错 Shape为抽象类，不能进行实例化
var y = new Rectangle(3, 4);  // 正确