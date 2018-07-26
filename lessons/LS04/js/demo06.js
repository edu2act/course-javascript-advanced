/**
 * Created by qile on 2017/8/14.
 */
//检测是否在严格模式的方法

"use stirct"
function isStrictMode() {
    return this === window?false:true;
}
//"use stirct" 
console.log(isStrictMode());