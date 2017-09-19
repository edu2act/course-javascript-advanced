var fs = require('fs');
var readableStream = fs.createReadStream('./Test.txt');
var data = '';
readableStream.on('data', function(chunk){
	data += chunk;
});
readableStream.on('end', function(){
	console.log(data,typeof data);
	var arr = String.prototype.split.call(data,",");
	var foo1 = new Function(arr[0],arr[1],arr[2]);
	var foo2 = new Function(arr[3],arr[4],arr[5]);
	var foo3 = new Function(arr[6],arr[7],arr[8]);
	var foo4 = new Function(arr[9],arr[10],arr[11]);
	console.log(foo1(2,3),foo2(2,3),foo3(2,3),foo4(2,3));
});