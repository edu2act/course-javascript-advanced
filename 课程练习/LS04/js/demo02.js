/**
 * Created by qile on 2017/8/14.
 */
//Part 11111111111111111111
//普通函数直接调用
function test() {
    console.log("this is",this);
}
test();//window

//对象方法调用
var obj = {
    x:0,
    test:function(){
        console.log(this.x);
    }
};
obj.test();//0

//Part 22222222222222222
//间接调用 实例一
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB

//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"QL"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
//swim(1,2);与swim.call(null,1,2);相同


//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack