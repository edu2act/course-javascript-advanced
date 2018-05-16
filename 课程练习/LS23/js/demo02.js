/**
 * Created by qile on 2017/8/14.
 */
// JS中一切都是对象（如何理解这句话），任何支持的类型都可以通过对象来表示
// JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串
// JSON 可以以字符串的形式表示 JS基本数据类型变量和对象（引用）类型变量

var obj1 = "xxx";
var obj2 = 23;
var obj3 = false;
var obj4 = { x: 1, y: 2, a: [1, 3, 5], b: "xyz" };
var obj5 = [123, 345];
var obj6 = [{ z: 3 }, [1, 2]];
var obj7 = {x:true};

var json1 = '"xxx"';
var json2 = '23';
var json3 = 'false';
var json4 = '{"x":1,"y":2,"a":[1,3,5],"b":"xyz"}';
var json5 = '[123,345]';//注意区别于：'["123","345"]'
var json6 = '[{"z":3},[1,2]]';
var json7 = '{"x":true}';//注意区别于：'{"x":"true"}'

// 在线测试工具 http://www.json.cn/
//练习：写几个json对象，数组，对象，数字，字符等等
var j1 = '[{"name":"jack","obj":{"x":1,"y":2},"arr":[1,2,"3"]},2]';
var j2 = '{"x":1,"y":"2"}';

//查看一下 api.github.com 返回的json数据

//思考：以上实例传递的都是属性，方法如何传递？回顾Function构造函数和创建函数的3种方式
var foo = new Function("x","y","return x>y?x:y;");
foo(2,3);


//var jf = '["x","y","return x<y?x:y;"]';
var af = ["x","y","return x<y?x:y;"];
var fee = new Function(af[0],af[1],af[2]);
fee(2,3);
