/**
 * Created by qile on 2017/8/14.
 */
//Error
function idLog(x){
    try{
        var arr = new Array(-1);
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log("222");
    }
}
idLog(123);

//
