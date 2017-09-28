/**
 * Created by qile on 2017/8/14.
 */
//测试 1
function A(){
    this.a = 10;
    this.af = function(){console.log(this.a);}
}
var a = new A();

function B(){
    A.call(this);
    this.b = 20;
    this.bf = function(){console.log(this.a);}
}
B.prototype.__proto__ = A.prototype;
var b = new B();




//JS实现继承的形式 一
function Person(name){
    this.name = name;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,id){
    Person.call(this,name);
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",12);
var s2 = new Student("www",23);

//JS实现继承的形式 二
function Person(name){
    this.name = name;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,id){
    Person.call(this,name);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
var s1 = new Student("xxx",12);
var s2 = new Student("www",23);
