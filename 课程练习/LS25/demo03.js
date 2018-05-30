//测试2 DOM0级事件处理
/*
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };//思考：是覆盖还是两个语句都会输出？
    div2.onclick = eventHandler;
    //div2.onclick = null;//取消事件响应
}
*/


//测试3 DOM2级事件处理
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    // div1.addEventListener("click",eventHandler,false);//第3个参数可选
    div1.addEventListener("click",function(){
        console.log("xx");
    });//思考：是覆盖还是两个语句都会输出？

    //div2.addEventListener("click",eventHandler);
    //div2.addEventListener("click",eventHandler,false);
    //div2.removeEventListener("click",eventHandler);//取消事件响应处理

    //自定义事件、事件分发、事件监听
    // div2.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
    // div2.dispatchEvent(new Event("MyEvent"));

    //思考DOM节点对象的继承关系
    
    //addEventListener、removeEventListener、dispatchEvent这3个方法都是定义在哪个原型上的？
    // console.log(div2.__proto__);
    // console.log(div2.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__.__proto__.__proto__);
    //EventTarget 是一个由可以接收事件的对象实现的接口，并且可以为它们创建侦听器
    
}


/*
//自定义事件（创建、分发、捕获的综合案例）
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // console.log(e.target);
        // console.log(this);
        var myEvent = new Event("MyEvent");
        // div2.dispatchEvent(myEvent);//若改我div1分发的话会怎样
        div1.dispatchEvent(myEvent);

    }
    div1.onclick = eventHandler;

    //下述代码部分，参见事件流部分
    div2.addEventListener("MyEvent",function (e) {
        console.log("div2 listener",e.type);
    },false);//改为true

    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式
}

*/
/*
//DOM0级事件响应 定义在哪里？
document.body.__proto__.hasOwnProperty("onclick");//false
document.body.__proto__.__proto__.hasOwnProperty("onclick");//true

//DOM2级事件响应  定义在哪里？
document.body.__proto__.hasOwnProperty("addEventListener");//false
"addEventListener" in document;//true
document.body.__proto__.__proto__.__proto__.__proto__.__proto__.hasOwnProperty("addEventListener");//true
*/

