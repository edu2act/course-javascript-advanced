//任务二//
// 在fib函数中填入代码，返回菲波那契数列的第n个数的值。
// 菲波那契数列是指每一位都是前两位相加之和的一个数列，一个有限的菲波那契数列如下所示
// 0 1 1 2 3 5 8 13 ...
// 举例来说
// fib(0)的返回值是 0
// fib(1)的返回值是 1
// fib(2)的返回值是 1( 因为1 = 0 + 1 )
// fib(3)的返回值是 2( 因为2 = 1 + 1 )
// fib(4)的返回值是 3( 因为3 = 2 + 1 )
function fib(n){
    var result;
    var arr = [];
    arr[0]=0;
    arr[1]=1;
    if(n==0){return 0;}
    if(n==1){return 1;}

    for(var i=1;i<n;i++){
        //result = arr.reduce((a,b)=>{return a+b;});
        result = arr[i]+arr[i-1];
        arr[i+1]=result;
    }
    return result;
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));

//思考如何完成
// 每一位都是前前边所有数字相加之和的一个数列
// 0 1 对应的序列为
// 0 1 1 2 4 8 16 32 ...

// 每一位都是前前边3个数字相加之和的一个数列
// 0 1 1 对应的序列为
// 0 1 1 2 4 7 13 24 ...
function fib(n){
    if(n==0){return 0;}
    if(n==1){return 1;}
    if(n==2){return 1;}
    else{
        return fib(n-1)+fib(n-2)+fib(n-3);
    }
}
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));

function fib(n){
    var add = 0;
    var arr = [0,1,1];
    if(n===0){return 0;}
    if(n===1){return 1;}
    if(n===2){return 2;}
    for(var i=2;i<n;i++){
        arr[i+1]=arr[i]+arr[i-1]+arr[i-2];
    }
    add = arr[n];
    return add;
}
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));




