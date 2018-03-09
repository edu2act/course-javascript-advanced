/**
 * Created by qile on 2017/8/14.
 */
function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};

var p1 = new Person("Mike");
console.log(p1.name);
console.log(p1.age);
p1.sayHi();

console.log(p1.__proto__ === Person.prototype);


