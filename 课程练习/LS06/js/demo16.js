/**
 * Created by qile on 2017/8/21.
 */
var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}

//通过&&和||的组合实现如上功能，注：小括号优先级最高
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");