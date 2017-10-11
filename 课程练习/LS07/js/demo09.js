/**
 * Created by qile on 2017/8/14.
 */
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