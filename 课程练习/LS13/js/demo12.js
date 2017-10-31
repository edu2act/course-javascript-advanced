/**
 * Created by qile on 2017/8/14.
 */
function add([x, y]){
    return x + y;
}
add([1, 2]); // 3

/////
[[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]

/////
//函数参数的解构也可以使用默认值。
function move({x = 0, y = 0} = {}) {
    return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

///////
//注意，下面的写法会得到不一样的结果。
function move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
//上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。

//undefined就会触发函数参数的默认值。
[1, undefined, 3].map((x = 'yes') => x);
// [ 1, 'yes', 3 ]