//Promise静态方法 Promise.all
const p1 = new Promise((resolve, reject) => {
	resolve('hello');
}).then(result => result);

const p2 = new Promise((resolve, reject) => {
	reject("error!");
	//throw new Error('err');
}).then(result => result);

Promise.all([p1, p2]) //数组里若不是Promise对象的话，会调用resolve转成Promise对象
	.then(result => console.log("xx",result))
  .catch(e => console.log("yy",e));


//Promise静态方法 Promise.race
var p1 = new Promise((resolve,reject)=>{setTimeout(resolve,Math.random()*5000,"aaa")});
var p2 = new Promise((resolve,reject)=>{setTimeout(reject,Math.random()*5000,"bbb")});
var p3 = Promise.race([p1,p2]).then(
	(val)=>{console.log("val:",val)},
	(err)=>{console.log("err:",err)}
);
  
