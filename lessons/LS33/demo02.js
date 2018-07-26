//Promise的原型方法，Promise.prototype.then
//then的基本案例 Part1
function promiseTest(ms) {
    return new Promise((resolve, reject) => {
		console.log(111);
		setTimeout(resolve, ms, 'done');//setTimeout(reject, ms, 'failed');
		//return setTimeout(resolve, ms, 'done');//若不想输出222，则需要立即返回
		console.log(222);
    });
}
promiseTest(2000).then(
    (val) => { console.log('this is success callback:',val) },
    (err) => { console.log('this is fail callback:',err) }
)


//then的链式调用 Part2
var p = new Promise(function(resolved,rejected){
	console.log("11");
	resolved("22");//思考：rejected("22");
	console.log("33");
});
p.then(function(v1){
	console.log("44",v1);
},function(e1){//若没有rejected响应，则rejected向下传递。若有则后续then为resolved状态
	console.log("55",e1);
})
.then(function(v2){
	console.log("66",v2);
},function(e2){
	console.log("77",e2);
})
.then(function(v3){
	console.log("88",v3);
},function(e3){
	console.log("99",e3);
});

//返回值为新的Promise的情况
var p = new Promise(function(resolved,rejected){
	console.log("11");
	rejected("22");
	console.log("33");
});
p.then(function(v1){
	console.log("44",v1);
},function(e1){
	console.log("55",e1);
	return new Promise((resolved,rejected)=>{
		setTimeout(rejected, 2000,"66");
	});
})
.then(function(v2){
	console.log("77",v2);
},function(e2){
	console.log("88",e2);
})
console.log("99");


//补充案例
////11111111
var p = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, "hi");
  });
  p.then((v) => { console.log(v) });
  
  ////222222222
  var p = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, "hi");
  });
  var x = p.then((v) => { console.log(v) });
  console.log(x instanceof Promise);
  
  ////3333333
  var p = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, "hi");
  });
  var x = p.then((v) => { console.log("x:", v) });
  console.log(x instanceof Promise);
  var y = x.then((v) => { console.log("y:", v) });
  console.log(y instanceof Promise);
  
  ////4444444444
  var p = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, "hi");
  });
  p.then((v) => {
	console.log("x:", v);
	return new Promise((resolve, reject) => {
	  setTimeout(resolve, 2000, v + ":xx");
	})
  }).then(v => console.log(v), e => console.log(e));