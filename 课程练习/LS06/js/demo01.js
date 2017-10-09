/**
 * Created by qile on 2017/8/14.
 */
//JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();			 //Hi

//练习：写一个JS对象，包括自己的姓名、年龄，和一个方法，调用这个方法