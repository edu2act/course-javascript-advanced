/**
 * Created by qile on 2017/8/14.
 */
function add([x, y]){
    return x + y;
}
add([1, 2]); // 3

/////
[[1, 2], [3, 4]].map(function([a, b]){return a + b;});
// [ 3, 7 ]
//箭头函数表示形式 [[1, 2], [3, 4]].map(([a, b]) => a + b);

/////
//函数参数的解构也可以使用默认值,下例中用了两次的解构赋值
function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]

///////
//注意，下面的写法会得到不一样的结果。
function move2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move2({x: 3, y: 8})); // [3, 8]
console.log(move2({x: 3})); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]
//上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。


//undefined就会触发函数参数的默认值
[1, undefined, 3].map(function(x = 'yes') {return x;});
// [ 1, 'yes', 3 ]
//箭头函数表示形式 [1, undefined, 3].map((x = 'yes') => x);
