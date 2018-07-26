/**
 * Created by qile on 2017/8/14.
 */
//Part1111111111111111111
//与函数一样，类也可以使用表达式的形式定义。
const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};
// 上面代码使用表达式定义了一个类。
// 需要注意的是，这个类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，指代当前类。
let inst = new MyClass();
inst.getClassName(); // Me
//Me.name // ReferenceError: Me is not defined
//上面代码表示，Me只在 Class 内部有定义。

//如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。
const MyClass = class { /* ... */ };

//采用 Class 表达式，可以写出立即执行的 Class
let person = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}('张三');
person.sayName(); // "张三"
//上面代码中，person是一个立即执行的类的实例



//Part2222222222222222222
//类不存在变量提升（hoist），这一点与 ES5 完全不同。
new Foo(); // ReferenceError
class Foo {}
//上面代码中，Foo类使用在前，定义在后，这样会报错，
// 因为 ES6 不会把类的声明提升到代码头部。
// 这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。
{
    let Foo = class {};
    class Bar extends Foo {
    }
}
// 上面的代码不会报错，因为Bar继承Foo的时候，Foo已经有定义了。
// 但是，如果存在class的提升，上面代码就会报错，因为class会被提升到代码头部，
// 而let命令是不提升的，所以导致Bar继承Foo的时候，Foo还没有定义


//
//由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。
class Point {}
Point.name // "Point"
//name属性总是返回紧跟在class关键字后面的类名


///////////////////////
//与 ES5 一样，在“类”的内部可以使用get和set关键字，
//对某个属性设置存值函数和取值函数，
// 拦截该属性的存取行为。
class MyClass {
    constructor(prop) {
        this._prop = prop;
    }
    get prop() {
        return this._prop;
    }
    set prop(value) {
        this._prop = value;
    }
}

let inst = new MyClass(23);
console.log(inst.prop);//23
inst.prop = 45;
console.log(inst.prop);//45

//////////////////////////
//Class 内部调用new.target，返回当前 Class。
class Rectangle {
    constructor(length, width) {
        console.log(new.target === Rectangle);
        this.length = length;
        this.width = width;
    }
}
var obj = new Rectangle(3, 4); // 输出 true
