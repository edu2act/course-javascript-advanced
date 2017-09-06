/**
 * Created by qile on 2017/8/14.
 */
//使用了let就可以避免var所带来的问题
let userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};

let a=2,b=3;
if(a<b){
    let userId = 234;
}

