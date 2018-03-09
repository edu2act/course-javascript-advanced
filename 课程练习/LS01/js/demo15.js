/**
 * Created by qile on 2017/9/7.
 */
//数组回顾
//字面量创建数组
var arr1 = [2,3,"a","b"];
console.log(arr1);

//访问与改变数组
console.log(arr1[2]);
console.log(arr1.length);
arr1.length-=1;
console.log(arr1);

//数组相关方法回顾
///////////////////////////////
var arr2 = ['a','b','c'];
var arr3 = arr2.slice(1,2);//并不破坏arr2
// var arr3 = arr2.slice(1);
console.log(arr2);
console.log(arr3);

//////////////////////////////
var arr4 = ['m','n'];
var pushReturn = arr4.push('o');
console.log(pushReturn);//push后数组的长度
console.log(arr4);

var popReturn =arr4.pop();
console.log(popReturn);//pop出的元素
console.log(arr4);

////////////////////////////////
var arr5 = [1,2,3,4];
var shiftReturn = arr5.shift();
console.log(shiftReturn);//shift移除的元素
console.log(arr5);

var unshiftReturn = arr5.unshift(0);
console.log(unshiftReturn);//unshift后数组的长度
console.log(arr5);

/////////////////////////////
var arr6 = ["ab","cd","ef"];
console.log(arr6.indexOf("cd"));

var joinReturn1 = arr6.join();
console.log(joinReturn1);

var joinReturn2 = arr6.join('-');
console.log(joinReturn2);

//////////////批量删除元素，破坏性操作，具体参见Array章节//////////////
var arr7 = ["x","y","z"];
var arr8 = arr7.splice(1,1,"m");
console.log(arr7,arr8);

//正则 参见正则章节

//标准函数 console.*
console.log("log message");
console.error("error message");
console.warn("warn message");
console.assert(3>2,"assert message");//断言
console.trace();//用于调试追踪


