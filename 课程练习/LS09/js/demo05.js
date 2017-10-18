/**
 * Created by qile on 2017/8/14.
 */
//数组方法参考链接：
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//Part1  数组的静态方法
const bar = ["a", "b", "c"];
Array.from(bar);// ["a", "b", "c"]
Array.from('foo');// ["f", "o", "o"]

Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

var arr1 = [1,3,4];
console.log(Array.isArray(arr1));

function foo(){
    console.log(Array.isArray(arguments));
    //console.log(arguments.pop());//这样是否能调用？数组与类数组对象
    console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,5);

//Part2  数组添加删除元素的原型方法 破坏性
//Array.prototype.shift
var arr2 = [1,3,5,7];
var shiftElement = arr2.shift();//返回去除的元素
console.log(shiftElement,arr2);

var newLength = arr2.unshift(1,2);//返回新的数组长度
console.log(newLength,arr2);

var popElement = arr2.pop();//返回pop出去的元素
console.log(popElement,arr2);

var newLength = arr2.push(77,88);//返回新的数组长度
console.log(newLength,arr2);

//思考：如何通过push将两个数组组合成一个数组
var arr3 = ["a","b"];
var arr4 = ["c","d"];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3);

//splice 从start开始，移除deleteCount个元素，并插入给定的元素
var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");//返回切掉的数组
console.log(spliceElements,arr5);
//思考start若是负数则返回什么？：arr5.splice(-2,2,"x");



