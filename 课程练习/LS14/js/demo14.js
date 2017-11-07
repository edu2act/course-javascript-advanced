/**
 * Created by qile on 2017/8/14.
 */
var s = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));
for (let i of s) {
    console.log(i);
}
// 2 3 5 4

//
// 例一
var set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]
// 例二
var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 去除数组的重复成员
[...new Set([1,2,3,3])];

//
//两个对象总是不相等的
let set = new Set();
set.add({});
set.size // 1
set.add({});
set.size // 2