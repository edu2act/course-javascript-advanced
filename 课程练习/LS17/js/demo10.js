/**
 * Created by qile on 2017/8/14.
 */
//静态方法实例与原型方法实例
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){//定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();//This is a static method
var instance1 = new BaseClass();
instance1.f2();//This is a prototype method


//思考下述案例 静态方法
var BaseClass = new Function();
var Class2 = BaseClass;
BaseClass.f1 = function(){
    console.log(" BaseClass ' s static method");
};
Class2.f2 = function(){
    console.log(" Class2 ' s static method");
};
BaseClass.f1();//BaseClass ' s static method
BaseClass.f2();//Class2 ' s static method
Class2.f1();//BaseClass ' s static method
Class2.f2();//Class2 ' s static method
console.log(BaseClass === Class2);


//思考下述案例 原型方法 和 实例方法
var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a instance method ");
};
var instance1 = new BaseClass();
instance1.method1();//This is a instance method

instance1.method1 = function(){
    console.log("2 This is a instance method too ");
};
instance1.method1();//This is a instance method too 覆盖了原型的方法


// 思考下述实例
/*
var BaseClass = function() {
    this.method1 = function(){
        console.log('1 Defined by the "this" in the instance method');
    }
};
var instance1 = new BaseClass();
instance1.method1 = function(){
    console.log('2 Defined directly in the instance method');
};
BaseClass.prototype.method1 = function(){
    console.log('3 Defined by the prototype instance method ');
};
instance1.method1();//Defined directly in the instance method
*/