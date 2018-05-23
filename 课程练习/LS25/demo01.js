//
window.onload = function () {
    console.log("window onload");
    var div2 = document.getElementById("div2");
    //思考：将下述7到11行代码写在window.onload回调函数外会怎样
    div2.onclick = function () {
        console.log("div2 click");
    }
    // div2.onmouseover = function () {
    //     console.log("div2 mouseover");
    // }
}
function div1click() {
    console.log("div1 click");
    //console.log("this:", this);
}

/*
//思考下述输出顺序，理解事件流
window.onclick = function () {
    console.log("window onclick");
}
document.onclick = function () {
    console.log("document onclick");
}
//
window.onload = function () {
    console.log("window onload!");
    //修改onclick
    document.getElementById("div").onclick = function (e) {
        console.log("xx",e);
    };
    document.getElementById("inp").onclick = function (e) {
        console.log("yy",e);
    };

    //添加事件监听
    // var myFun = function (e) {
    //     console.log("myFun",e);
    // };
    // document.getElementById("div").addEventListener("click",myFun,false);
    // document.getElementById("inp").addEventListener("click",myFun,false);
    // //document.getElementById("div").removeEventListener("click",myFun);
}
*/
