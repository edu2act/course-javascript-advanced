/**
 * Created by qile on 2017/8/14.
 */
//Part11111111111111111111111111111111111111111111111
//类的prototype属性相当于实例的原型，所有在类中定义的方法，都会被实例继承。
//如果在一个方法前，加上static关键字，
//就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class Foo {
    static classMethod() {
        return 'hello';
    }
}
Foo.classMethod(); // 'hello'
var foo = new Foo();
foo.classMethod();// TypeError: foo.classMethod is not a function
// 上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，
// 可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。
// 如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法
// 注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。

class Foo {
    static bar () {
        this.baz();
    }
    static baz () {
        console.log('hello');
    }
    baz () {
        console.log('world');
    }
}
Foo.bar(); // hello
// 上面代码中，静态方法bar调用了this.baz，这里的this指的是Foo类，
// 而不是Foo的实例，等同于调用Foo.baz。
// 另外，从这个例子还可以看出，静态方法可以与非静态方法重名。


//思考下边的例子
class Foo {
    static baz () {
        console.log('hello');
    }
    baz () {
        console.log('world');
        Foo.baz();//
    }
    static fun1(o){
        // this.fun2();//报错
        o.fun2();
    }
    fun2(){
        console.log("fun2")
    }
}
var a = new Foo();
a.baz();//world hello

Foo.fun1(a);//fun2

