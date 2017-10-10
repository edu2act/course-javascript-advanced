/**
 * Created by qile on 2017/8/14.
 */
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出什么？
person.name = "Lucy";
console.log(person.name);//输出什么？
delete person.name;
console.log(person.name);//输出什么？

