/**
 * Created by qile on 2017/8/14.
 */
var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");


console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
console.log(typeof String);
console.log(typeof Boolean);

console.log(typeof Math);
console.log(typeof JSON);
