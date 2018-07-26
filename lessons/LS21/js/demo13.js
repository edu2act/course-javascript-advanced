/**
 * Created by qile on 2017/8/14.
 */
//Error相关
var e1 = new Error("e1 Error Msg");
try {
    throw  e1;//throw new Error("Whoops!");
} catch (e) {
    console.log(e.name + ": " + e.message);
}

//可以直接创建Error对象
console.log(Error.prototype);//{name: "Error", message: "", constructor: function, toString: function}
var myError = new Error("NewMessage");
console.log(myError.name,myError.message);

////基于Error的子类，可以创建自定义错误对象，并添加若干自有属性
function MyError(name,message) {
    this.name = name||'MyError';
    this.message = message || 'Default Message';
}
MyError.prototype.__proto__ = Error.prototype;
//MyError.prototype = Object.create(Error.prototype);
//MyError.prototype.constructor = MyError;


try {
    // throw new MyError();
    throw new MyError('custom message');
} catch (e) {
    console.log(e.name);     // 'MyError'
    console.log(e.message);  // 'custom message'
}


