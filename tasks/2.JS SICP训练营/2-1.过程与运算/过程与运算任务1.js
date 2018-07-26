//任务一
// 在factorial函数中填入代码，实现n的的阶乘。 所谓n的阶乘就是，1 X 2 X 3 .... X ( n -1 ) X n
//
// 举例来说
// 1的阶乘是 1
// 2的阶乘是 1 X 2 = 2
// 3的阶乘是 1 X 2 X 3 = 6
function factorial(n){
    var result = n;
    for(var i=n-1;i>0;i--){
        result*=i
    }
    return result;
}
//思考0的阶乘是多少，上述代码是否还正确？如何修改？

var factorial = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
    //return n * arguments.callee(n - 1);
};
console.log(factorial(4));

//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));