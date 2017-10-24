/**
 * Created by qile on 2017/10/20.
 */
//String.prototype.search 注意search忽略 全局g
console.log("a1b2c3d4".search(/1/));//返回index 1
console.log("a1b2c3d4".search(/f/));//返回index -1 没找到
console.log("a1b2c3d4".search(/\d/g));//返回index 1 忽略全局
console.log("a1b2c3d4".search(/\d\w/g));//返回index 1 忽略全局

//String.prototype.match 如果匹配不到返回null 匹配到了返回数组
// 包含的信息有index 原始字符串 有没有g影响很大
console.log("a1b2c3d4".match(/1/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/f/));//null
console.log("a1b2c3d4".match(/\d/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/\d/g));//[ '1', '2', '3', '4' ]

// String.prototype.replace
console.log("a,b,c,d".replace(",","X"));
console.log("a2b3c4d".replace(/[2-3]/,"X"));
console.log("a2b3c4d".replace(/[2-3]/g,"X"));

//String.prototype.split
console.log("a,b,c,d".split(","));
console.log("a2b3c4d".split(/\d/));

"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/);
"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/g);
"abcdef21313sfsflsf1223jlnsa".match(/[123efsa]/g);
"abcdef21313sfsflsf1223jlnsa".match(/[^123efsa]/g);
"abcdef21313sfsflsf1223jlnsa".match(/[1-2a-d]/g);
"hello world Hi you".match(/hello|world/);
"hello world Hi you".match(/hello|world/g);
"world Hi you".match(/hello|world/);
"THat hot hat".match(/h.t/);
"THat hot hat".match(/h.t/g);
"THat hot hat".match(/h.t/gi);

