/**
 * Created by qile on 2017/8/14.
 */
//UTC与GMT 时间
console.log(Date.now());
console.log(Date.parse("1970-01-01"));
console.log(Date.parse("1970-01-02"));


var d = new Date("1968-11-25");
console.log(d.getDay(),d.getFullYear(),d.getMonth());
console.log(d.getTimezoneOffset());

var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),d.toLocaleTimeString());
console.log(d.toDateString(),d.toLocaleDateString());
console.log(d.toJSON());

