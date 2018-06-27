// Promise构造函数用于实例化Promise对象
// Promise构造函数接受一个函数（执行器）作为参数，创建Promise对象时，执行器会立即执行
// 该执行器的两个参数分别是resolve函数和reject函数。
// resolve和reject这两个函数，由 JavaScript 引擎提供，不用自己部署。

// resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved）
// 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
// reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected）
// 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数


// Promise案例一
var myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    console.log("step1");
    setTimeout(function(){
        resolve("成功!"); // 思考：如果改为 reject("失败");
    }, 2500);
    //简写的方式  setTimeout(resolve,2500,"成功!");//等效于上面3行
    console.log("step2");
});

myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    console.log("Yes! " + successMessage);
},function(errorMessage){
	console.log("No! " + errorMessage);
});


//Promise 案例二
var promise = new Promise(function (resolve, reject) {
    console.log("创建Promise对象时，执行器会立即执行");
    var a = "xxx";
    setTimeout(() => { 
        if (a == "abc") {
            resolve(a);
        } else {
            reject(new Error("error"));
        }
    }, 2000);//2秒后执行（异步执行）
    a = "abc";//试试改为 a = "yyy";
});
promise.then(function (val) { //切换到fulfilled状态后调用，接收resolve的参数
    console.log(val);
}, function (err) { //切换到rejected状态后调用，接收reject的参数
    console.log(err);
});

// 案例三
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');//注意：一旦状态改变，就不会再变状态就凝固了，不会再变了
        setTimeout(reject, ms+500, 'failed');//思考：会转换为reject状态么
    });
}

timeout(1000).then(
(value) => {
    console.log(value);
},
(err)=>{ //思考：此行是否会被调用
    console.log(err);
});

//补充案例
// var p = new Promise((a,b)=>{
new Promise((a,b)=>{
	setTimeout(a,1000,"x");//setTimeout(b,1000,"x");
}).then(
	(v)=>{console.log("v1:",v)},
	(e)=>{console.log("e1:",e)}
).then(
	(v)=>{console.log("v2:",v)},
	(e)=>{console.log("e2:",e)}
)
