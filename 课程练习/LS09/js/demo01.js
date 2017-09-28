/**
 * Created by qile on 2017/8/14.
 */
//Error
function idLog(x){
    try{
        var arr = new Array(-1);
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log("222");
    }
}
idLog(123);

//使用map和reduce来实现，数组求平均值和标准差
//不用map和reduce的写法
var data = [1,1,3,5,5];
var total = 0;
for(var i=0;i<data.length;i++){
    total += data[i];
}
var average = total/data.length;
total = 0;
for(var i=0;i<data.length;i++){
    var deviation = data[i]-average;
    total+=deviation*deviation;
}
var stddev = Math.sqrt(total/(data.length-1));


//使用map和reduce的写法
var data = [1,1,3,5,5];
function sum(x,y) {return x+y;}
var average = data.reduce(sum)/data.length;

function deviation(x) {return x-average;}
var tempArr = data.map(deviation);
total = 0;
function square(x) {return x*x;}
total = tempArr.map(square).reduce(function (x,y) {
    return x+y;
});
var stddev = Math.sqrt(total/(data.length-1));

//使用map和reduce的精简写法
var data = [1,1,3,5,5];
var average = data.reduce(function(x,y) {return x+y;})/data.length;
var tempArr = data.map(function(x) {return x-average;});
total = 0;
total = tempArr.map(function(x) {return x*x;}).reduce(function (x,y) {
    return x+y;
});
var stddev = Math.sqrt(total/(data.length-1));

/*
//使用ES6中的箭头函数，会更为精简，详细内容参见ES6部分
var data = [1,1,3,5,5];
var average = data.reduce((x,y)=>{return x+y;})/data.length;
var tempArr = data.map((x)=>{return x-average;});
total = 0;
total = tempArr.map((x)=>{return x*x;}).reduce((x,y)=>{return x+y;});
var stddev = Math.sqrt(total/(data.length-1));
*/