/**
 * Created by qile on 2017/8/14.
 */
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

//思考：
(function(){
    try{
        console.log("x");
        return console.log("y");
    }
    finally{
        console.log("z")
    }
}());