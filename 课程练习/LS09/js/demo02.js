/**
 * Created by qile on 2017/8/14.
 */
//增删改查
var a = ["world"];
var v = a[0];
a[1] = 3.14;
i = 2;
a[i] = 3;
a[i+1] = "hello";
a[a[i]] = a[0];
console.log(a);

//
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);
console.log(a);