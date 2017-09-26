/**
 * Created by qile on 2017/9/26.
 */
//查看index16.html
window.onload = function () {
    var btns = document.getElementsByClassName("btn");
    function closureExample(objID) {
        var ol = document.getElementById(objID);
        //var li = document.createElement("li");//这样只会有一个li
        return function () {
            var li = document.createElement("li");
            ol.appendChild(li);
            li.innerHTML = "xxx";
        };
    }
    var foo = closureExample("orderList");
    for(var i=0;i<3;i++){
        (function (j) {
            btns[j].onclick = function () {
                setTimeout(foo,(3*j+2)*1000);
            };
        }(i));
    }
};
