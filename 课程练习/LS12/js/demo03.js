/**
 * Created by qile on 2017/8/14.
 */
//发布订阅 实例/////////////////////
// 案例 一
var Subject = function(){
    var _observer = [];
    this.attach = function(observer){
        _observer.push(observer);
    };
    this.detach = function(){
        _observer.pop();
    };
    this.notify = function(msg){
        for(var i=0;i<_observer.length;i++){
            _observer[i].update(msg);
        }
    };
    this.print = function(){
        console.log(_observer.length);
        console.log(_observer);
    };
};
var Observer = function(name){
    this.update = function(msg){
        console.log('i am '+name+',and i get the message: '+msg);
    };
};
var sub = new Subject()
sub.attach(new Observer('a'));
sub.attach(new Observer('b'));
sub.notify('hello');
//sub.print();

setTimeout(function(){
    var c = new Observer('c');
    sub.detach();
    sub.attach(c);
    c.update('world!');
    //sub.print();
});

//案例 二
var pubsub = (function(){
    var q = {}
    topics = {},
        subUid = -1;
    //发布消息
    q.publish = function(topic, args) {
        if(!topics[topic]) {return;}
        var subs = topics[topic],
            len = subs.length;
        while(len--) {
            subs[len].func(topic, args);
        }
        return this;
    };
    //订阅事件
    q.subscribe = function(topic, func) {
        topics[topic] = topics[topic] ? topics[topic] : [];
        var token = (++subUid).toString();
        topics[topic].push({
            token : token,
            func : func
        });
        return token;
    };
    return q;
    //取消订阅就不写了，遍历topics，然后通过保存前面返回token，删除指定元素
})();
//触发的事件
var logmsg = function(topics, data) {
    console.log("logging:" + topics + ":" + data);
};
//监听指定的消息'msgName'
var sub = pubsub.subscribe('msgName', logmsg);
//发布消息'msgName'
pubsub.publish('msgName', 'hello world');
//发布无人监听的消息'msgName1'
pubsub.publish('anotherMsgName', 'me too!');


//Promise 参见ES6部分///////////////////////
