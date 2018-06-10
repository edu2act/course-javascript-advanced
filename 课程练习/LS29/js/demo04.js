/**
 * Created by qile on 2017/8/14.
 */
//Part 111111111111111111111111111111111111
//下面是一个类似数组的对象，Array.from将它转为真正的数组。
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
var arr1 = Array.prototype.slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']


//
// arguments对象 案例
function foo() {
    // var args = Array.prototype.slice.call(arguments);
    var args = Array.from(arguments);//
    console.log(args);
// ...
}

//只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组
Array.from('hello');
// ['h', 'e', 'l', 'l', 'o']
let namesSet = new Set(['a', 'b']);
Array.from(namesSet); // ['a', 'b']

//
//值得提醒的是，扩展运算符（...）也可以将某些数据结构转为数组。
// arguments对象
function foo() {
    var args = [...arguments];
}

//扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换。Array.from方法则是还支持类似数组的对
//象。所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此
//时扩展运算符就无法转换。
Array.from({ length: 3 });
// [ undefined, undefined, undefined ]
//上面代码中，Array.from返回了一个具有三个成员的数组，每个位置的值都是undefined。扩展运算符转换不了这个对象。

//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
Array.from([1, 2, 3], function(x){return x * x} );// [1, 4, 9]
//Array.from([1, 2, 3], (x) => x * x);// [1, 4, 9]
// 等同于
Array.from([1, 2, 3]).map(function(x){return x * x});
//Array.from([1, 2, 3]).map(x => x * x);

//关于Array.of静态方法
//Array.of方法用于将一组值，转换为数组。
Array.of(3, 11, 8); // [3,11,8]
Array.of(3); // [3]
Array.of(3).length; // 1
//这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
Array(); // []
Array(3); // [, , ,]
Array(3, 11, 8); // [3, 11, 8]
//上面代码中，Array方法没有参数、一个参数、三个参数时，返回结果都不一样。只有当参数个数不少于2个时，Array()才会返回由参数组成的新数
//组。参数个数只有一个时，实际上是指定数组的长度

//Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。
Array.of(); // []
Array.of(undefined); // [undefined]
Array.of(1); // [1]
Array.of(1, 2); // [1, 2]
//Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组

//ES5可以用下面的代码模拟实现Array.of方法
function ArrayOf(){
    return [].slice.call(arguments);
}

//Part 2222222222222222222 Array新增的原型方法
//数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），
//然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
//Array.prototype.copyWithin(target, start = 0, end = this.length)
//它接受三个参数
//target（必需）：从该位置开始替换数据。
//start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
//end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
[1, 2, 3, 4, 5].copyWithin(0, 3);// [4, 5, 3, 4, 5]

// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
 [1, 2, 3, 4, 5].copyWithin(0, -2, -1);// [4, 2, 3, 4, 5]


//数组实例的find方法，用于找出第一个符合条件的数组成员。
//它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
//如果没有符合条件的成员，则返回undefined。
[1, 4, -5, 10].find(
    function(n){
        return n<0;
    }
);
//上面代码找出数组中第一个小于0的成员。
//[1, 4, -5, 10].find((n) => n < 0);// -5 箭头函数的表示形式

[1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}); // 10
//上面代码中，find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
[1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
}) // 2
//这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。

//fill方法使用给定值，填充一个数组。
['a','b','c'].fill(7);
// [7, 7, 7]

//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
['x', 'y', 'z'].fill(7, 1, 2);
// ['x', 7, 'z']
//上面代码表示，fill方法从1号位开始，向原数组填充7，到2号位之前结束

// ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。
// 它们都返回一个遍历器对象，可以用for...of循环进行遍历。
// 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'
for (let [index, elem] of ['a', 'b'].entries()) { //[index,elem] 解构赋值
    console.log(index, elem);
}
// 0 "a"
// 1 "b"

/*
//下述内容参见迭代器章节
//如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。iterator参见后续章节
let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']

//Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。
// 该方法属于ES7，但Babel转码器已经支持。
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, NaN].includes(NaN); // true
//该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，
// 如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
//没有该方法之前，我们通常使用数组的indexOf方法，检查是否包含某个值
*/

//Array空位数组（稀疏数组）
//forEach(), filter(), every() 和some()都会跳过空位。
//map()会跳过空位，但会保留这个值
//join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
new Array(3);// [, , ,]
//空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点。
0 in [undefined, undefined, undefined] // true
0 in [, , ,] // false

//单独测试下述代码
/*
// forEach方法
[,'a'].forEach(function(x,i){return console.log(i);}); // 1

// filter方法
['a',,'b'].filter(function(x){return true;}) // ['a','b']

// every方法
[,'a'].every(function(x){return x==='a'}) // true

// some方法
[,'a'].some(function(x){return x !== 'a';} ) // false

// map方法
[,'a'].map(function (x) {return 1;}) // [,1]
*/
