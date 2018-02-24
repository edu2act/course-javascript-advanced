/**
 * Created by qile on 2017/8/14.
 */
//异常处理基本形式
// try语句包含了由一个或者多个语句组成的try块, 和至少一个catch子句或者一个finally子句的其中一个
// 或者两个兼有， 下面是三种形式的try声明:
// try...catch
// try...finally
// try...catch...finally
try{
    //try_statements 可能出现错误部分
    console.log("try_statements");
    throw "Some Error";//可以抛出异常 throw new Error("ErrorMsg");
    // var a= new Array(-1);
    // throw new TypeError();// throw new ReferenceError();
}
catch(e){ //catch和finally至少有一个
    //catch_statements 捕获处理异常
    console.log("catch_statements",e);
}
finally{ //catch和finally至少有一个
    //finally_statements 最终处理
    console.log("finally_statements");
}

/*
catch语句中包含要执行的语句，当try语句中抛出错误时。
也就是，你想让try语句中的内容成功， 如果没成功，你想控制接下来发生的事情，这时你可以在catch语句中实现。
如果有在try块中有任何一个语句（或者从try块中调用的函数）抛出异常, 控制立即转向catch子句。
如果在try块中没有异常抛出，则catch子句将会跳过。
finally子句无论是否有异常抛出或着是否被捕获它总是执行。
可以嵌套一个或者更多的try语句,如果内部的try语句没有catch子句，那么将会进入包围它的try语句的catch子句。
 */
try {
    try{
        throw new Error("ErrorMessage11");
    }
    // catch (e){
    //     //throw "ErrorMessage22"; //抛出异常后将直接跳出catch，catch内后续代码不再执行
    //     console.log("inside catch",e.message);
    //     //throw "ErrorMessage22";
    // }
    finally {
        console.log("finally 111")
    }
}
catch (e) {
    console.log("outside catch",e.message);
}
finally {
    console.log("finally 222");
}


//输入月份异常案例 注意可以在外层进行捕获异常错误
function UserException(message) {
    this.message = message;
    this.name = "UserException";
}
function getMonthName(mo) {
    mo = mo-1; // 调整月份数字到数组索引 (1=Jan, 12=Dec)
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (months[mo] !== undefined) {
        return months[mo];
    } else {
        throw new UserException("InvalidMonthNo");
    }
}
try {
    // statements to try
    var myMonth = 15; // 15 超出边界并引发异常
    var monthName = getMonthName(myMonth);
} catch (e) {
    var monthName = "unknown";
    console.log(e.message, e.name); // 传递异常对象到错误处理
}


//Part 22222222222222 嵌套的 try-blocks
//1
try {
    try {
        throw new Error("oops");
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}
// Output:
// "finally"
// "outer" "oops"

//2
try {
    try {
        throw new Error("oops");
    }
    catch (ex) {
        console.error("inner", ex.message);
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}
// Output:
// "inner" "oops"
// "finally"

//3
try {
    try {
        throw new Error("oops");
    }
    catch (ex) {
        console.error("inner", ex.message);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}
// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"

//4
try {
    try {
        throw new Error("oops");
    }
    catch (ex) {
        console.warn("inner", ex.message);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.warn("outer", ex.message);
}
// Output:
// "inner" "oops"
// "finally"