/**
 * Created by qile on 2017/8/14.
 */
//静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。
class Foo {
}
Foo.prop = 1;
Foo.prop // 1
//上面的写法为Foo类定义了一个静态属性prop。
//目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。

/*
// 以下两种写法都无效
class Foo {
    // 写法一
    prop: 2

    // 写法二
    static prop: 2
}

Foo.prop // undefined
*/

//目前有一个静态属性的提案，对实例属性和静态属性都规定了新的写法
class MyClass {
    static myStaticProp = 42;
    constructor() {
        console.log(MyClass.myStaticProp); // 42
    }
}
// 同样的，这个新写法大大方便了静态属性的表达，ES6暂不支持
// 老写法
class Foo {
    // ...
}
Foo.prop = 1;

// 新提案的写法 ES6暂不支持
class Foo {
    static prop = 1;
}
// 上面代码中，老写法的静态属性定义在类的外部。整个类生成以后，再生成静态属性。
// 这样让人很容易忽略这个静态属性，也不符合相关代码应该放在一起的代码组织原则。
// 另外，新写法是显式声明（declarative），而不是赋值处理，语义更好