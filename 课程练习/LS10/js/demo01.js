/**
 * Created by qile on 2017/8/14.
 */
//异常处理相关

//try语句包含了由一个或者多个语句组成的try块, 和至少一个catch子句或者一个finally子句的其中一个
// 或者两个兼有， 下面是三种形式的try声明:
// try...catch
// try...finally
// try...catch...finally

/*
catch语句中包含要执行的语句，当try语句中抛出错误时。
也就是，你想让try语句中的内容成功， 如果没成功，你想控制接下来发生的事情，这时你可以在catch语句中实现。
如果有在try块中有任何一个语句（或者从try块中调用的函数）抛出异常, 控制立即转向catch子句。
如果在try块中没有异常抛出，则catch子句将会跳过。
finally子句在try块和catch块之后执行但是在下一个try声明之前执行。
无论是否有异常抛出或着是否被捕获它总是执行。
你可以嵌套一个或者更多的try语句。
如果内部的try语句没有catch子句，那么将会进入包围它的try语句的catch子句。
 */

function logMyErrors(e) {
    console.log(e);
}
try {
    throw "myException"; // generates an exception
    //throw new Error("ErrorObj");
}
catch (e) {
    // statements to handle any exceptions
    logMyErrors(e); // pass exception object to error handler
}

//////////
function logMyErrors(e) {
    console.log(e);
}
try {
    try{
        throw new Error("ErrorObj");
    }
    // catch (e){
    //     throw "myException";
    // }
    finally {
        console.log("finally 111")
    }
}
catch (e) {
    // statements to handle any exceptions
    logMyErrors(e); // pass exception object to error handler
}
finally {
    console.log("finally 222")
}


//////////////
try {
    throw new RangeError();
    // throw new TypeError();
    // throw new ReferenceError();
} catch (e) {
    if (e instanceof TypeError) {
        // statements to handle TypeError exceptions
        console.log("TypeError");
    } else if (e instanceof RangeError) {
        // statements to handle RangeError exceptions
        console.log("RangeError");
    } else if (e instanceof ReferenceError) {
        // statements to handle ReferenceError exceptions
        console.log("ReferenceError");
    } else {
        // statements to handle any unspecified exceptions
        logMyErrors(e); // pass exception object to error handler
    }
}