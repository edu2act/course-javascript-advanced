function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.show = function(){
    console.log("i'm",this.name,",i'm ",this.age,"years old!")
}
module.exports = Person;

//任务：创建一个Student.js文件
//创建一个Student模块，实现导出、导入和模块使用