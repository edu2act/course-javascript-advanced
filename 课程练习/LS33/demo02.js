//Promise的原型方法，Promise.prototype.then
//then的基本案例
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


//then的链式调用 
var p = new Promise(function(resolved,rejected){
	console.log("11");
	resolved("22");//思考：rejected("22");
	console.log("33");
});
p
.then(function(v1){
	console.log("44",v1);
},function(e1){
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
// VM494:2 11
// VM494:4 33
// VM494:8 44 22
// VM494:13 66 undefined
// VM494:18 88 undefined