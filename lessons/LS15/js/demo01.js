/**
 * Created by qile on 2017/8/14.
 */

//测验 使用3种方式来创建对象
var obj1,obj2,obj3;
//obj1通过字面量方式创建，并创建自身属性x
//obj2通过Object静态方法创建，obj2的原型为obj1，并创建自身属性y
//obj3通过构造函数来创建，构造函数为Obj3

//通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());

//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);
newObj.age = 23;
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);//自有属性

var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);
console.log(obj2.hasOwnProperty("x"));

//构造函数的方式创建JS对象  此处略讲，详情参照后续面向对象编程 注：JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};

var person1 = new Person("Mike",21);
person1.sayName();
