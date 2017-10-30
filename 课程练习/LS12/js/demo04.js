/**
 * Created by qile on 2017/8/14.
 */
//XMLHttpRequest Get 请求
//后端参见NodeAjaxTest01.js
var xhr = new XMLHttpRequest();
if(!xhr){console.log("xhr 创建失败！！");}

xhr.onreadystatechange = function () {
    //console.log(xhr.readyState,xhr.status);
    if(xhr.readyState == 4){
        //表示服务器的相应代码是200；正确返回了数据
        if(xhr.status == 200){
            var message=xhr.responseText;
            console.log(message);
        }
    }
};

xhr.open("get","http://127.0.0.1:8080?a=1&b=2",true);
//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post需增加
xhr.send();
