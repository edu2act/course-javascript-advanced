/**
 * Created by qile on 2017/8/14.
 */
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
// console.log(obj.__proto__);

var newObj = Object.create(obj);
newObj.age = 23;

//JavaScript的继承方式不是 类-类继承 而是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__);
console.log(newObj.__proto__===obj);
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null