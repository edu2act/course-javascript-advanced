/**
 * Created by qile on 2017/8/14.
 */
//XMLHttpRequest Get 请求
//后端代码参见参见NodeAjaxTest01.js
//实例一
var xhr = new XMLHttpRequest();
// if (!xhr) {
//     console.log("xhr 创建失败！！");
// }
xhr.onreadystatechange = function () {
    //console.log(xhr.readyState,xhr.status);
    if (xhr.readyState == 4) {
        //表示服务器的相应代码是200；正确返回了数据
        if (xhr.status == 200) {
            var message = xhr.responseText;
            console.log(message);
        }
    }
};
xhr.open("get", "http://127.0.0.1:8080?getInfo=MyGetInformation", true);
//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post需增加
xhr.send();


//实例二
var inputElement = document.createElement("input");
inputElement.setAttribute("style", "width:200px");
inputElement.setAttribute("style", "height:20px");
document.body.appendChild(inputElement);

document.body.appendChild(document.createElement("br"));

var label = document.createElement("label");
label.setAttribute("style", "width:200px");
label.setAttribute("style", "height:20px");
document.body.appendChild(label);

inputElement.onkeyup = function () {
    //思考创建了多少个xhr对象，每个对象都是单独请求的么，如果将下一行提到函数外会如何
    //对应读写DOM操作，有什么区别
    var xhr = new XMLHttpRequest();
    if (!xhr) {
        console.log("xhr 创建失败！！");
    }
    xhr.onreadystatechange = function () {
        //console.log(xhr.readyState,xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            var message = xhr.responseText;
            //console.log(message);
            label.innerText = message;
        }
    };
    xhr.open("get", "http://127.0.0.1:8080?getInfo=" + inputElement.value, true);
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post需增加
    xhr.send();
};

// 域名检测
// http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=qq.com



