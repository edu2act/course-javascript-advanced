/**
 * Created by qile on 2017/8/14.
 */
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Still Mike
delete person.name;
console.log(person.name);//Still Mike

