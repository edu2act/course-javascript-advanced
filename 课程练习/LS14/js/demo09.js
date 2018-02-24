/**
 * Created by qile on 2017/8/14.
 */
//Part 111111111111111
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}

//Part 2222222222222222

var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
//console.log(obj.w);//有w，但上边for...in遍历不到


//通过属性特性描述符来查看某一对象属性的特性