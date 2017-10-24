/**
 * Created by qile on 2017/8/14.
 */
//Part 1111111111 引用错误案例 ReferenceError
// var y = 23;
try
{
    var x = y;// 没有定义y所以产生错误。如果有y的话，不会抛异常错误
    //console.log("x") = 23;//赋值引用错误，在chorme中测试
}catch(e){
    console.log(e.name,e.message);
}
finally {
    console.log("finally");//有无异常该句都会执行
}

//Part 222222222 范围错误 RangeError
try{
    var a= new Array(-1);
    //var a= new Array(1);
}catch(e){
    console.log(e.name,e.message);
}
finally {
    console.log("finally");//有无异常该句都会执行
}

//Part 3333333333 类型错误 TypeError
try{
    var a;a.aa();
    //var a= new 123; //在chrome中测试
}catch(e){
    console.log(e.name,e.message);
}
finally {
    console.log("finally");//有无异常该句都会执行
}

//自定义错误类
function UserError(message){
    this.message = message || '默认信息';
    this.name = 'UserError';
}
UserError.prototype.__proto__ = Error.prototype;
// UserError.prototype = new Error();
// UserError.prototype.constructor = UserError;


//错误类型测试
try {
    throw new RangeError();
    // throw new TypeError();
    // throw new ReferenceError();
} catch (e) {
    if (e instanceof TypeError) {
        console.log("TypeError");
    } else if (e instanceof RangeError) {
        console.log("RangeError");
    } else if (e instanceof ReferenceError) {
        console.log("ReferenceError");
    } else {
        console.log("OtherError");
    }
}

//
try {
    throw n; // 抛出一个数值异常
} catch (e) {
    if (e <= 50) {
        // 异常在 1-50 之间时，直接处理
    } else {
        // 异常无法处理，重新抛出，可再外层再次被捕获
        throw e;
    }
}

