/**
 * Created by qile on 2017/8/14.
 */
// 4 提取JSON数据
//解构赋值对提取JSON对象中的数据，尤其有用。
var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);
// 42, "OK", [867, 5309]
//上面代码可以快速提取JSON数据的值。

//5 函数参数的默认值
jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
// ... more config
}) {
// ... do stuff
};
//指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

//6 遍历Map结构 Map相关内容参见Map Set章节
// 任何部署了Iterator接口的对象，都可以用for...of循环遍历。
// Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便。
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + " is " + value);
}
// first is hello
// second is world
//如果只想获取键名，或者只想获取键值，可以写成下面这样。
// 获取键名
for (let [key] of map) {
// ...
}
// 获取键值
for (let [,value] of map) {
// ...
}

// 7 输入模块的指定方法
//加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
const { SourceMapConsumer, SourceNode } = require("source-map");
