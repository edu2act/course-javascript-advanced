/**
 * Created by qile on 2017/8/14.
 */
//测试
function A(){
    this.a = 10;
    this.af = function(){console.log(this.a);}
}
var a = new A();

function B(){
    A.call(this);
    this.b = 20;
    this.bf = function(){console.log(this.a);}
}
B.prototype.__proto__ = A.prototype;
var b = new B();