//再谈事件对象与事件流
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click--red");
        console.log("target:",e.target);
        console.log("this:",this);
        console.log(e.bubbles,e.cancelable,e.cancelBubble);
        //e.stopPropagation();
    },false);//改成true会怎样

    div2.addEventListener("click",function (e) {
        console.log("div2 click--yellow");//
        //e.target.hidden = true;//和this.hidden = true;有什么区别？为什么？
        //this.hidden = true;
        
        //e.stopPropagation();
    },true);//改成true会怎样

    div3.addEventListener("click",function (e) {
        console.log("div3 click--blue");
        //e.stopPropagation();
    },false);//改成true会怎样

    /*
    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);//若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);//若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序
    */
   

    //阻止默认事件行为
    document.getElementById("aId").addEventListener("click",function (e) {
        e.preventDefault();//阻止默认事件，阻止了链接跳转
        console.log("a click");
    });
}
