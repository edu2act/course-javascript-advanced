//任务一
// 在factorial函数中填入代码，实现n的的阶乘。 所谓n的阶乘就是，1 X 2 X 3 .... X ( n -1 ) X n
//
// 举例来说
// 1的阶乘是 1
// 2的阶乘是 1 X 2 = 2
// 3的阶乘是 1 X 2 X 3 = 6
function factorial(n){
    //这里填写代码
    var result = n;
    for(var i=n-1;i>0;i--){
        result*=i
    }
    return result;
}
//思考0的阶乘是多少，上述代码是否还正确？如何修改？