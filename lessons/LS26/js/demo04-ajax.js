/**
 * Created by qile on 2017/8/14.
 */
//XMLHttpRequest Get 请求
//后端代码参见参见NodeAjaxTest01.js
//实例一
var xhr = new XMLHttpRequest();
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




// 域名检测
// http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=qq.com



