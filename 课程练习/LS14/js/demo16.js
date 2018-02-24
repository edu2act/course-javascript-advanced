/**
 * Created by qile on 2017/10/9.
 */
//Part 1 JS对象是否可扩展 isExtensible
//新对象默认是可扩展的无论何种方式创建的对象，这里使用的是字面量方式
var empty1 = {a:1};
console.log(Object.isExtensible(empty1));//true

//对象是否可以扩展与对象的属性是否可以配置无关
empty2 = Object.create({},{
    "a":{
        value : 1,
        configurable : false,//不可配置
        enumerable : true,//可枚举
        writable : true//可写
    }
});
console.log(Object.isExtensible(empty2));


//////////Object.isExtensible和Object.preventExtensions实例////////
(function () {
    //Object.preventExtensions 将原对象变得不可扩展,并且返回原对象.
    var obj = {};
    var obj2 = Object.preventExtensions(obj);
    console.log(obj === obj2);//true

    //新创建的对象默认是可扩展的
    var empty = {};
    console.log(Object.isExtensible(empty));//true
    empty.a = 1;//添加成功

    //将其变为不可扩展对象
    Object.preventExtensions(empty);
    console.log(Object.isExtensible(empty));//false

    //使用传统方式为不可扩展对象添加属性
    empty.b = 2;//静默失败,不抛出错误
    empty["c"] = 3;//静默失败,不抛出错误

    //在严格模式中,为不可扩展对象添加属性将抛出错误
    (function fail(){
        "use strict";
        empty.d = "4";//throws a TypeError
    })();

    //使用 Object.defineProperty方法为不可扩展对象添加新属性会抛出异常
    Object.defineProperty(empty,"e",{value : 5});//抛出 TypeError 异常
    Object.defineProperty(empty,"a",{value : 2});
    console.log(empty.a);//输出2
})();


//Part 2 JS对象是否密封 isSealed
//如果对象不可扩展，且所有属性的可配置特性为false，则该对象为密封的对象
(function () {
    //新建的对象默认不是密封的
    var empty = {};
    console.log(Object.isSealed(empty));//false

    //如果把一个空对象变得不可扩展,则它同时也会变成个密封对象.
    Object.preventExtensions(empty);
    console.log(Object.isSealed(empty));//true

    //但如果这个对象不是空对象,则它不会变成密封对象,因为密封对象的所有自身属性必须是不可配置的.
    var hasProp = {fee : "fie foe fum"};
    Object.preventExtensions(hasProp);
    console.log(Object.isSealed(hasProp));//false

    //如果把这个属性变得不可配置,则这个对象也就成了密封对象.
    Object.defineProperty(hasProp,"fee",{configurable : false});
    console.log(Object.isSealed(hasProp));//true
})();

//////////Object.isSealed和Object.seal实例////////
(function () {
    var obj = {             //声明一个对象
        prop:function(){},
        foo:"bar"
    };
    //可以添加新的属性,已有属性的值可以修改,可以删除
    obj.foo = "baz";
    obj.lumpy = "woof";
    delete obj.prop;

    var o = Object.seal(obj);//将 obj 密封,且返回原对象
    console.log(o === obj);//true
    console.log(Object.isSealed(obj));//true

    //仍然可以修改密封对象上的属性的值
    obj.foo = "quux";//修改成功

    //但不能把密封对象的属性进行重新配置,譬如讲数据属性重定义成访问器属性.
    //Object.defineProperty(obj,"foo",{get : function(){return "g";}});//抛出 TypeError

    //任何除修改属性值以外的操作都会失败
    obj.quaxxor = "the friendly duck";//失败,属性没有成功添加，因为seal包括了不可扩展
    delete obj.foo;//静默失败,属性没有删除成功

    //在严格模式中,会抛出 TypeError 异常
    (function fail(){
        "use strict";
        //delete obj.foo;//抛出 TypeError 异常
        //obj.sparky = "arf";//抛出 TYpeError 异常
    })();

    //Object.defineProperty(obj,"ohai",{value :17});//添加属性失败
    Object.defineProperty(obj,"foo",{value : "eit"});//修改成功
    console.log(obj.foo);//“eit”
})();

////Part 3 JS对象是否冻结 isFrozen
//如果对象不可扩展，所有属性的可配置特性为false，
//且所有属性的可写特性为false则该对象为密封的对象
(function () {
    //一个对象默认是可扩展的,所以他也是非冻结的.
    console.log(Object.isFrozen({}));//false

    //一个不可扩展的空对象同时也是一个冻结对象.一个不可扩展的空对象也是密封对象
    var vacuouslyFrozen = Object.preventExtensions({});
    console.log(Object.isFrozen(vacuouslyFrozen) === true);//true
    console.log(Object.isSealed(vacuouslyFrozen) === true);//true

    //一个非空对象默认也是非冻结的.
    var oneProp = { p:42 };
    console.log(Object.isFrozen(oneProp));//false

    //让这个对象变的不可扩展,并不意味着这个对象变成了冻结对象,因为 p 属性仍然是可以配置的(而且可写的).
    Object.preventExtensions( oneProp );
    console.log(Object.isFrozen(oneProp));//false

    //如果删除了这个属性,则它成为空对象,会成为一个冻结对象.
    delete oneProp.p;
    console.log(Object.isFrozen(oneProp));//true

    //一个不可扩展的对象,拥有一个不可写但可配置的属性,则它仍然是非冻结的.
    var nonWritable = { e : "plep" };
    Object.preventExtensions(nonWritable);
    Object.defineProperty(nonWritable,"e",{writable : false});//不可写
    console.log(Object.isFrozen(nonWritable));//false

    //把这个属性改为不可配置,会让这个对象成为冻结对象
    Object.defineProperty(nonWritable,"e",{configurable : false});//不可配置
    console.log(Object.isFrozen(nonWritable));//true

    //一个不可扩展的对象,值拥有一个访问器,则它仍然是非冻结的.
    var accessor = {get food(){return "yum";}};//这里使用的是字面值法创建对象,默认可配置
    Object.preventExtensions(accessor);
    console.log(Object.isFrozen(accessor));//false

    //把这个属性改为不可配置,会让这个对象成为冻结对象.
    Object.defineProperty(accessor,"food",{configurable:false});
    console.log(Object.isFrozen(accessor));//true


    //使用 Object.freeze 是冻结一个对象的最方便的方法.
    var frozen = {1:81};
    console.log(Object.isFrozen(frozen));//false
    Object.freeze(frozen);
    console.log(Object.isFrozen(frozen));//true

    //一个冻结对象也是一个密封对象
    console.log(Object.isSealed(frozen));//true

    //一个冻结对象也是一个不可扩展对象
    console.log(Object.isExtensible(frozen));//false
})();

//////////Object.isFrozen和Object.freeze实例////////
(function () {
    var obj = {
        prop:function(){},
        foo:"bar"
    };
    //可以添加新的属性,已有的属性可以被修改或删除
    obj.foo = "baz";
    obj.lumpy = "woof";
    delete obj.prop;

    Object.freeze(obj);//冻结

    console.log(Object.isFrozen(obj));//true

    //对冻结对象的任何操作都会失败
    obj.foo = "quux";//静默失败;
    obj.quaxxor = "the friendly duck";//静默失败

    //在严格模式中会抛出 TypeError 异常
    (function () {
        "use strict";
        //obj.foo = "sparky";//抛出 TypeError 异常
        //delete obj.quaxxor;//抛出 TypeError 异常
        //obj.sparky = "arf";//抛出 TypeError 异常
    })();

    //使用 Object.defineProperty方法同样会抛出 TypeError 异常
    //Object.defineProperty(obj,"ohai",{value:17});//抛出 TypeError 异常
    //Object.defineProperty(obj,"foo",{value:"eit"});//抛出 TypeError 异常
})();


//思考基本数据类型 是冻结的么？如何理解基本数据类型的不可变性
var str = "xxx";
console.log(Object.isFrozen(str));

//以下内容仅做了解 浅冻结与深冻结 类比 浅拷贝与深拷贝
(function () {
    obj = {
        internal :{}
    };
    Object.freeze(obj);//浅冻结
    obj.internal.a = "aValue";
    console.log(obj.internal.a);//"aValue"

    //想让一个对象变得完全冻结,冻结所有对象中的对象,可以使用下面的函数.
    function deepFreeze(o){
        var prop,propKey;
        Object.freeze(o);//首先冻结第一层对象
        for(propKey in o){
            prop = o[propKey];
            if(!o.hasOwnProperty(propKey) || !(typeof prop === "object") || Object.isFrozen(prop)){
                continue;
            }
            deepFreeze(prop);//递归
        }
    }

    deepFreeze(obj);
    obj.internal.b = "bValue";//静默失败
    console.log(obj.internal.b);//undefined
})();
