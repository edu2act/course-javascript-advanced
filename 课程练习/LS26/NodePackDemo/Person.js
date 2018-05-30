function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.show = function(){
    console.log("i'm",this.name,",i'm ",this.age,"years old!")
}
module.exports = Person;