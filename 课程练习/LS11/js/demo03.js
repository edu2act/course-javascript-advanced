/**
 * Created by qile on 2017/8/14.
 */
// Part11111111111111111 JSON.stringfiy的用法
// JSON.stringify 案例一 复合对象转换
var o1 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
    d:5,
    e:{name:"Jack"},
    f:function(){console.log(12);}, //注意函数序列化问题
    h:0x12
};
var jsonStr1 = JSON.stringify(o1);
console.log(jsonStr1);
console.log(o1);

// JSON.stringify 案例二 复合数组的转换
var a1 = [1,"x",true,{y:2,z:3}];
var jsonStrArr1 = JSON.stringify(a1);
console.log(jsonStrArr1);
console.log(a1);

// JSON.stringify 案例三 replacer参数的用法
var o2 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
};
//replacer 节点转换函数，在值被转为字符串之前转换树节点的值
var jsonStr2 = JSON.stringify(o2,function (key,value) {
    if(value === true){
        value = false;
    }
    if((value instanceof Array)&&value.length == 4){
        value[0] = "Hi";
    }
    if(key === "a"){
        console.log("find key a");
        value = 12345;
    }
    if(key === "z"){
        console.log("find key z");
        value = "zzz";
    }
    return value;
});
console.log(jsonStr2);
console.log(o2);


// Part2222222222222222 JSON.parse的用法
// JSON.parse的用法 案例一
var jsonStr3 = '{"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"}}';
var jsonStr4 = '[1,"x",true,{"y":2,"z":3}]';
var jsonStr5 = '{"a":[1,2],"b":false,"c":[3,4,"x",{"y":34,"z":56}]}';

var o3 = JSON.parse(jsonStr3);
var o4 = JSON.parse(jsonStr4);
//reviver参数是可选的，是一个节点访问函数，可用来转换解析后的数据
var o5 = JSON.parse(jsonStr5,function (key,value) {
    if(typeof value === "boolean"){
        value = "ChangeToString";
    }
    if(key == "c"){//迭代的遍历某个希望寻找的数据属性，可用于数据信息的查找
        console.log("c:",value);
    }
    return value;
});
console.log(o3);
console.log(o4);
console.log(o5);

// JSON.parse的用法 了解reviver 遍历顺序 案例二
var o6 = JSON.parse('{"p": 5}', function (k, v) {
    if(k === '') return v;     // 如果到了最顶层，则直接返回属性值，
    return v * 2;              // 否则将属性值变为原来的 2 倍。
});                            // { p: 10 }
console.log(o6);

var o7 = JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', function (k, v) {
    console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
                    // 最后一个属性名会是个空字符串。
    return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
});
console.log(o7);
