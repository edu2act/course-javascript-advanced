/**
 * Created by qile on 2017/8/14.
 */
var i = 1;//i=2、3、4
switch(i){
    case 1:
        console.log("case 1");
    case 2:
        console.log("case 2");
        break;
    case 3:
        console.log("case 3");
    //break;
    case 4:
        console.log("case 4");
    default:
        console.log("default");
}


// 利用switch的穿透性:求某月某日是一年中的第几天?
var year = 2017,
    month = 5,
    date = 20,
    sum = 0;
switch(month-1){
    case 11:
        sum += 30;
    case 10:
        sum += 31;
    case 9:
        sum += 30;
    case 8:
        sum += 31;
    case 7:
        sum += 31;
    case 6:
        sum += 30;
    case 5:
        sum += 31;
    case 4:
        sum += 30;
    case 3:
        sum += 31;
    case 2:
        sum += year%4==0&&year%100!=0||year%400==0?29:28;
    case 1:
        sum += 31;
    default:
        sum += date;
}
console.log(sum);