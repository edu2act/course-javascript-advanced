/**
 * Created by qile on 2017/8/14.
 */
function thisTest(){
    console.log(this === window);
}
thisTest();


var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);


/*
 var point = {
 x:0,
 y:0,
 moveTo:function(x,y){
 function moveToX(x){
 this.x = x;
 };
 function moveToY(y){
 this.y = y;
 }
 moveToX(x);
 moveToY(y);
 }
 };
 */