/**
 * Created by qile on 2017/8/14.
 */
//ES5 中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);//报错么，输出啥？

if(true){
    var a = 20;
}
console.log(a);

// 思考：下边的例子是否报错，输出什么，相关知识参考预解析部分
// 你是否能够区分undefined和undeclared
if(false){
    var b = 30;
}
console.log(b);

//C、C++、C#、Java等语言中的块，在线编译网站上查看
/*
 #include <iostream>
 using namespace std;
 int main()
 {
 for(int i =0;i<5;i++){
 cout<<"i = "<<i<<endl;
 }
 //cout<<"i = "<<i<<endl;//这里是否能输出i，和JavaScript（ES5）有什么不同
 return 0;
 }
 */