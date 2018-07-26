/**
 * Created by qile on 2017/8/14.
 */
//修改obj属性的特性
var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}

//思考：如果只更改writable特性的话，enumerable特性是否被修改

