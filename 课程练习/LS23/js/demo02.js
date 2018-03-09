/**
 * Created by qile on 2017/8/14.
 */
// JS中一切都是对象（如何理解这句话），任何支持的类型都可以通过对象来表示
// JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串
var obj1 = "xxx";
var obj2 = 23;
var obj3 = false;
var obj4 = {x:1,y:2,a:[1,3,5],b:"xyz"};
var obj5 = [123,345];
var obj6 = [{z:3},[1,2]];

var json1 = '"xxx"';
var json2 = '23';
var json3 = 'false';
var json4 = '{"x":1,"y":2,"a":[1,3,5],"b":"xyz"}';
var json5 = '[123,345]';
var json6 = '[{"z":3},[1,2]]';

// 在线测试工具 http://www.json.cn/

//查看一下 api.github.com 返回的json数据

