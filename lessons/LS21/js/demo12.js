/**
 * Created by qile on 2017/8/14.
 */
window.onload = function () {
    window.Foo = function () {
        var inputValue = document.getElementById("inputID").value;
        try{
            var n = parseInt(inputValue);
            var a= new Array(n);//定义一个数组 传3试试、再传-5试试
            for(var i=0;i<n;i++){a[i] = i;}
        }
        catch(e){
            alert(e.name+e.message);
            console.log("n:",n);
            a = [];
        }
        finally {
            document.getElementById("labelID").innerHTML = a+"_"+(a instanceof Array)
        }
    };
};

