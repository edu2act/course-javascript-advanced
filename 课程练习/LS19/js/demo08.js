/**
 * Created by qile on 2017/8/14.
 */
//UTC 协调世界时间 Coordinated Universal Time
//GMT 格林尼治时间 （北京时间是正8时区） Greenwich Mean Time
var date1 = new Date(2017,9,18,12,34,1);//注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);

var date2 = new Date(17,9,18,12,34,1);//若years为2位的话自动加1900
console.log(date2);

var date3 = new Date("2017-08-09");//注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式
console.log(date3);

//var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);//逆运算是date4.getTime();

var date5 = new Date();//new Date(Date.now());
console.log(date5);

//补充：无效日期
var date6 = new Date(NaN);
console.log(date6);//Invalid Date