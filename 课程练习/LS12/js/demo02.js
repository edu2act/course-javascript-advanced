/**
 * Created by qile on 2017/8/14.
 */

// Part111111111111111  函数回调
// 案例一 同步执行的回调
var arr1= [1,3,5,7,9];
console.log("arr1:",arr1);
var newArray1 = arr1.map(function (a) {
    return a*a;
});
console.log("newArray1:",newArray1);

var arr2= [1,3,5,7,9];
console.log("arr2:",arr2);
var newArray2 = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log("newArray2:",newArray2);

// 案例二 异步执行的回调
var LTimeOperation = function(taskID){
    var id = taskID;
    //思考什么时候将方法定义在构造函数内，什么时候定义在构造函数的prototype属性上
    this.go = function(callback){
        console.log('Start LTimeOperation #'+id);
        var delay = parseInt((Math.random() * 10000000) % 5000);
        setTimeout(function(){
            console.log('task #'+id+' cost '+delay+' ms.');
            callback();
        },delay);
    }
};
function f2(){
    console.log('this is f2, i am callback!\n');
}
for(var i = 0;i<5;i++){
    var task = new LTimeOperation(i);
    task.go(f2);
}


// Part22222222222222  事件触发与事件监听
// 案例一 在控制台中输出window 和 document ，看看window中的on 和document中的on
document.onclick = function () {
    console.log("document 被点击了！")
};

// 案例二
for(var i=0;i<5;i++){
    var btn=document.createElement("BUTTON");
    btn.setAttribute("id","btnId"+i);
    btn.setAttribute("style","width:200px");
    btn.setAttribute("style","height:20px");
    document.body.appendChild(btn);
}
//思考异步 与 变量共享的问题 ES5如何用IIFE来解决共享问题
for(var i=0;i<5;i++) {
    //(function (i) {
        document.getElementById("btnId" + i).addEventListener("click", function () {
            document.bgColor = "#"+i*2+i*2+i*2+i*2+"00";
            console.log("#"+i*2+i*2+i*2+i*2+"00");
        });
    //})(i);
}

// 案例三 在Nodejs环境下进行调试
var http = require('http');
var url = 'http://www.baidu.com';

http.get(url,function(res){
    res.setEncoding('utf-8');
    res.on('data',function(data){
        console.log(data);
    });
    res.on('end',function(end){
        console.log('End!');
    });
});