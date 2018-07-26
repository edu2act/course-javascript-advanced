
//Promise静态方法 Promise.resolve

//Promise.resolve参数3种情况
//Promise.resolve(value); //返回的Promise对象状态为fulfilled(例外：错误对象)，并且将该value传递给对应的then方法
//Promise.resolve(promise); //直接返回这个Promise对象
//Promise.resolve(thenable); //返回的Promise对象的最终状态由then方法执行决定

//
Promise.resolve("Success").then(function (value) {
	console.log(value); // "Success"
}, function (value) {});

var promise1 = Promise.resolve([1, 2, 3]);
promise1.then(function (value) {
	console.log(value);
});

//
Promise.resolve(new Promise((resolve,reject)=>{
	setTimeout(reject,2000,"bbb");
})).then(
	(val)=>{console.log("val:",val)},
	(err)=>{console.log("err:",err)}
)

//
var original = Promise.resolve('xxxxx');
var cast = Promise.resolve(original);
cast.then(function (value) {
	console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));


////Promise静态方法 Promise.reject
//Promise.reject()
var p = Promise.reject("reject reason");
p.then(
	(v)=>{console.log("v:",v)},
	(e)=>{console.log("e:",e)}
)

