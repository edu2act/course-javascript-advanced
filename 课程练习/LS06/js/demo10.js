/**
 * Created by qile on 2017/8/14.
 */
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");
//Object.getOwnPropertyDescriptor(obj,"y");
//Object.getOwnPropertyDescriptor(obj,"z");
