/**
 * Created by qile on 2017/8/14.
 */
//JS实现继承的形式 一
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);


//JS实现继承的形式 二
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
// console.log(Person.prototype.constructor); //
// console.log(Student.prototype.constructor); //
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);