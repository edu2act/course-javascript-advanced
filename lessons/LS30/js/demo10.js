/**
 * Created by qile on 2017/8/14.
 */
// Part1111111111111
// ES5中 实参数大于形参数量时，可以通过arguments来获得所有参数
function test() {
    console.log(arguments);//console.log(test.arguments);
}
test("a","b","c");//

//...Rest 相当于合并若干参数为一个数组，主要用于函数定义时，代替 arguments，组解决arguments的弊端
function f(...y){
    console.log(y);
}
f("a","b","c");//输出 ["a","b","c"]

function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3) // 10

//比arguments使用更加灵活,比如只想看从第二个开始之后的参数
function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");//输出 "a",["b","c","d"]
//思考：f("a",["b","c","d"]);//输出 "a",[["b","c","d"]]
f("a");//输出 "a",[]
f();//输出 undefined,[]
//思考function f(x,...y，z){console.log(y);}//此时y输出是什么


// Part2222222222222
//...Spread 扩展操作符 相当于解数组为分散的参数，主要用于函数调用时，...Rest的逆运算
function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);//等价于f("a","b","c");
f("a");//输出 "a",[]
f();//输出 undefined,[]


//Part333333333333 扩展知识 call与apply的转换 两者之间的区别 课通过...Rest和...Spread转换
function abc(...v){
    console.log(v)
}
o1 = {};
abc.call(o1,...[1,2,3]);//等效于 abc.apply(o1,[1,2,3]);

//函数定义和调用时的 合并元素为数组（...Rest） 与 拆分数组为各个元素(...Spread)


