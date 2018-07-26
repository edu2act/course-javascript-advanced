// 任务四
// 写一个f函数,满足下面的需求:
// 如果 n < 3，那么f(n) = n
// 如果 n >= 3, 那么 f(n) = f(n-1)+2f(n-2)+3f(n-3)

//使用断点调试测试下述代码
function f(n){
    if(n<3){
        return n;
    }else{
        return f(n-1)+2*f(n-2)+3*f(n-3);
    }
}