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

////
// Create a new object, that prototypally inherits from the Error constructor.
function MyError(message) {
    this.name = 'MyError';
    this.message = message || 'Default Message';   this.stack = (new Error()).stack;
}
MyError.prototype.__proto__ = Error.prototype;
//MyError.prototype = Object.create(Error.prototype);
//MyError.prototype.constructor = MyError;

try {
    throw new MyError();
} catch (e) {
    console.log(e.name);     // 'MyError'
    console.log(e.message);  // 'Default Message'
}

try {
    throw new MyError('custom message');
} catch (e) {
    console.log(e.name);     // 'MyError'
    console.log(e.message);  // 'custom message'
}