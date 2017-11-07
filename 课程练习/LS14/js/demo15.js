/**
 * Created by qile on 2017/8/14.
 */
var m = new Map();
var o = {p: 'Hello World'};
m.set(o, 'content')
m.get(o) // "content"
m.has(o) // true
m.delete(o) // true
m.has(o) // false

//
//作为构造函数，Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
var map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
map.size // 2
map.has('name'); // true
map.get('name'); // "张三"
map.has('title'); // true
map.get('title'); // "Author"

//Map构造函数接受数组作为参数，实际上执行的是下面的算法。
var items = [
    ['name', '张三'],
    ['title', 'Author']
];
var map = new Map();
items.forEach(([key, value]) => map.set(key, value));

//
// 如果对同一个键多次赋值，后面的值将覆盖前面的值。
let map = new Map();
map.set(1, 'aaa').set(1, 'bbb');
map.get(1); // "bbb"
// 上面代码对键1连续赋值两次，后一次的值覆盖前一次的值。
// 如果读取一个未知的键，则返回undefined。
new Map().get('asfddfsasadf')
// undefined

//只有对同一个对象的引用，Map结构才将其视为同一个键。这一点要非常小心。
var map = new Map();
map.set(['a'], 555);
map.get(['a']); // undefined

//思考：
var map = new Map();
map.set('a', 555);
map.get('a'); // 输出什么？

//
var map = new Map();
var k1 = ['a'];
var k2 = ['a'];
map.set(k1, 111);
map.set(k2, 222);
map.get(k1); // 111
map.get(k2); // 222
//上面代码中，变量k1和k2的值是一样的，但是它们在Map结构中被视为两个键。
// 由上可知，Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
// 这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，
// 就不用担心自己的属性与原作者的属性同名。

// 如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map将其视为一个键，包括0和-0。另外，虽然NaN不严格相
// 等于自身，但Map将其视为同一个键。
let map = new Map();
map.set(NaN, 123);
map.get(NaN); // 123
map.set(-0, 123);
map.get(+0); // 123
